import { useState } from 'react';
import { FlatList, TextInput, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/theme';
import { playlists } from '../../data/music';
import PlaylistRow from '../../components/PlaylistRow';

export default function SearchScreen() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const results = q ? playlists.filter((p) => p.title.toLowerCase().includes(q)) : [];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={20} color={colors.text} />
        </View>
        <Text style={styles.title}>Search</Text>
        <Ionicons name="camera-outline" size={30} color={colors.text} />
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search" size={26} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="What do you want to listen to?"
          placeholderTextColor="#222"
          value={query}
          onChangeText={setQuery}
          autoCorrect={false}
        />
      </View>

      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => (
          <PlaylistRow
            item={item}
            onPress={() => router.push({ pathname: '/playlist/[id]', params: { id: item.id } })}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10 },
  avatar: {
    width: 34, height: 34, borderRadius: 17, backgroundColor: colors.surfaceLight,
    alignItems: 'center', justifyContent: 'center',
  },
  title: { flex: 1, color: colors.text, fontSize: 26, fontWeight: '700', marginLeft: 12 },
  searchBar: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
    borderRadius: 8, marginHorizontal: 16, marginVertical: 10, paddingHorizontal: 12, height: 52,
  },
  input: { flex: 1, marginLeft: 10, fontSize: 17, fontWeight: '600', color: '#000' },
});