import { useState } from 'react';
import { FlatList, ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/theme';
import { playlists, Playlist } from '../../data/music';
import FilterChip from '../../components/FilterChip';
import PlaylistRow from '../../components/PlaylistRow';

const filters = ['Playlists', 'Albums', 'Artists', 'Downloaded'];
const kindFor: Record<string, Playlist['kind'] | undefined> = {
  Playlists: 'playlist',
  Albums: 'album',
  Artists: 'artist',
};

export default function LibraryScreen() {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);

  const data = playlists.filter(
    (p) => !active || !kindFor[active] || p.kind === kindFor[active]
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={20} color={colors.text} />
        </View>
        <Text style={styles.title}>Your Library</Text>
        <Ionicons name="search" size={26} color={colors.text} style={styles.icon} />
        <Ionicons name="add" size={30} color={colors.text} />
      </View>

      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
          {filters.map((f) => (
            <FilterChip
              key={f}
              label={f}
              active={active === f}
              onPress={() => setActive(active === f ? null : f)}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.sortRow}>
        <Ionicons name="swap-vertical" size={20} color={colors.text} />
        <Text style={styles.sortText}>Recents</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
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
  title: { flex: 1, color: colors.text, fontSize: 24, fontWeight: '700', marginLeft: 12 },
  icon: { marginRight: 16 },
  chips: { paddingHorizontal: 16, paddingVertical: 8 },
  sortRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12 },
  sortText: { color: colors.text, fontSize: 14, fontWeight: '600', marginLeft: 12 },
});