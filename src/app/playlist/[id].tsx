import { FlatList, Pressable, View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/theme';
import { playlists, tracks } from '../../data/music';
import TrackRow from '../../components/TrackRow';

export default function PlaylistScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const playlist = playlists.find((p) => p.id === id);

  if (!playlist) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Playlist not found</Text>
      </View>
    );
  }

  const header = (
    <LinearGradient
      colors={[playlist.color, colors.bg]}
      style={[styles.header, { paddingTop: insets.top + 12 }]}
    >
      <Pressable onPress={() => router.back()} style={styles.back}>
        <Ionicons name="chevron-back" size={24} color={colors.text} />
      </Pressable>
      <Text style={styles.title}>{playlist.title}</Text>
      <Text style={styles.meta}>{tracks.length} songs</Text>
      <View style={styles.actions}>
        <Ionicons name="shuffle" size={28} color={colors.textSecondary} />
        <View style={styles.play}>
          <Ionicons name="play" size={28} color="#000" />
        </View>
      </View>
    </LinearGradient>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tracks}
        keyExtractor={(t) => t.id}
        renderItem={({ item }) => <TrackRow track={item} />}
        ListHeaderComponent={header}
        contentContainerStyle={{ paddingBottom: 120 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  header: { paddingHorizontal: 16, paddingBottom: 16, marginBottom: 8 },
  back: {
    width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center', justifyContent: 'center', marginBottom: 40,
  },
  title: { color: colors.text, fontSize: 30, fontWeight: '700' },
  meta: { color: colors.textSecondary, fontSize: 14, marginTop: 6 },
  actions: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: 12 },
  play: {
    width: 60, height: 60, borderRadius: 30, backgroundColor: colors.green,
    alignItems: 'center', justifyContent: 'center', marginLeft: 20,
  },
});