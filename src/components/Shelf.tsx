import { FlatList, Pressable, View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/theme';
import { Playlist } from '../data/music';

type Props = { title: string; items: Playlist[]; onPressItem: (item: Playlist) => void };

export default function Shelf({ title, items, onPressItem }: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>{title}</Text>
      <FlatList
        horizontal
        data={items}
        keyExtractor={(i) => i.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable style={styles.card} onPress={() => onPressItem(item)}>
            <View style={[styles.cover, { backgroundColor: item.color }]}>
              <Text style={styles.coverText}>{item.title}</Text>
            </View>
            <Text style={styles.caption} numberOfLines={2}>{item.subtitle}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginTop: 28 },
  heading: { color: colors.text, fontSize: 24, fontWeight: '700', paddingHorizontal: 16, marginBottom: 14 },
  list: { paddingHorizontal: 16 },
  card: { width: 170, marginRight: 14 },
  cover: { width: 170, height: 170, borderRadius: 6, justifyContent: 'flex-end', padding: 10 },
  coverText: { color: '#fff', fontSize: 20, fontWeight: '800' },
  caption: { color: colors.textSecondary, fontSize: 14, marginTop: 8 },
});