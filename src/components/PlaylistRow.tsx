import { Pressable, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/theme';
import { Playlist } from '../data/music';

type Props = { item: Playlist; onPress?: () => void };

export default function PlaylistRow({ item, onPress }: Props) {
  const isArtist = item.kind === 'artist';
  return (
    <Pressable style={styles.row} onPress={onPress}>
      <View style={[styles.cover, { backgroundColor: item.color }, isArtist && styles.round]}>
        {item.id === 'liked' && <Ionicons name="heart" size={30} color="#fff" />}
      </View>
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.subtitle} numberOfLines={1}>{item.subtitle}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 16 },
  cover: { width: 68, height: 68, borderRadius: 4, alignItems: 'center', justifyContent: 'center' },
  round: { borderRadius: 34 },
  info: { marginLeft: 14, flex: 1 },
  title: { color: colors.text, fontSize: 17, fontWeight: '600' },
  subtitle: { color: colors.textSecondary, fontSize: 14, marginTop: 2 },
});