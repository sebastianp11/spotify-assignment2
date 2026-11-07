import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/theme';
import { Track } from '../data/music';

export default function TrackRow({ track }: { track: Track }) {
  return (
    <View style={styles.row}>
      <View style={styles.cover} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{track.title}</Text>
        <View style={styles.meta}>
          <Ionicons name="arrow-down-circle" size={16} color={colors.green} />
          {track.hasVideo && (
            <Text style={styles.subtitle}>  ▶ Video •</Text>
          )}
          <Text style={styles.subtitle} numberOfLines={1}> {track.artist}</Text>
        </View>
      </View>
      <Ionicons name="ellipsis-horizontal" size={20} color={colors.textSecondary} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 16 },
  cover: { width: 52, height: 52, borderRadius: 2, backgroundColor: colors.surfaceLight },
  info: { flex: 1, marginLeft: 12 },
  title: { color: colors.text, fontSize: 16, fontWeight: '600' },
  meta: { flexDirection: 'row', alignItems: 'center', marginTop: 3 },
  subtitle: { color: colors.textSecondary, fontSize: 14 },
});