import { useState } from 'react';
import { Pressable, ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/theme';
import { playlists, shelves } from '../../data/music';
import FilterChip from '../../components/FilterChip';
import Shelf from '../../components/Shelf';

const filters = ['All', 'Music', 'Podcasts', 'Audiobooks'];
const quickPicks = playlists.slice(0, 6);

export default function HomeScreen() {
  const router = useRouter();
  const [active, setActive] = useState('All');

  const open = (id: string) => router.push({ pathname: '/playlist/[id]', params: { id } });

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.topRow}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={20} color={colors.text} />
          </View>
          {filters.map((f) => (
            <FilterChip key={f} label={f} active={active === f} onPress={() => setActive(f)} />
          ))}
        </View>

        <View style={styles.grid}>
          {quickPicks.map((p) => (
            <Pressable key={p.id} style={styles.pick} onPress={() => open(p.id)}>
              <View style={[styles.pickCover, { backgroundColor: p.color }]}>
                {p.id === 'liked' && <Ionicons name="heart" size={26} color="#fff" />}
              </View>
              <Text style={styles.pickTitle} numberOfLines={2}>{p.title}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.prompt}>
          <View style={styles.djCircle}>
            <Ionicons name="radio-button-on" size={26} color={colors.green} />
          </View>
          <View style={styles.promptBar}>
            <Text style={styles.promptText}>Tell Spotify what to play</Text>
            <Ionicons name="mic-outline" size={24} color={colors.textSecondary} />
          </View>
        </View>

        {shelves.map((s) => (
          <Shelf key={s.title} title={s.title} items={s.items} onPressItem={(item) => open(item.id)} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  content: { paddingBottom: 190 },
  topRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10 },
  avatar: {
    width: 36, height: 36, borderRadius: 18, backgroundColor: colors.surfaceLight,
    alignItems: 'center', justifyContent: 'center', marginRight: 12,
  },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 16 },
  pick: {
    width: '48.5%', flexDirection: 'row', alignItems: 'center',
    backgroundColor: colors.surface, borderRadius: 6, marginBottom: 8, overflow: 'hidden',
  },
  pickCover: { width: 56, height: 56, alignItems: 'center', justifyContent: 'center' },
  pickTitle: { flex: 1, color: colors.text, fontSize: 14, fontWeight: '700', paddingHorizontal: 10 },
  prompt: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, marginTop: 14 },
  djCircle: {
    width: 44, height: 44, borderRadius: 22, backgroundColor: '#1d4ed8',
    alignItems: 'center', justifyContent: 'center',
  },
  promptBar: {
    flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: colors.surface, borderRadius: 24, height: 44, marginLeft: 12, paddingHorizontal: 18,
  },
  promptText: { color: colors.textSecondary, fontSize: 16, fontWeight: '600' },
});