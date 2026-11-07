import { useState } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/theme';

export default function MiniPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.cover} />
        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={1}>Something Blue</Text>
          <Text style={styles.artist} numberOfLines={1}>VOILÀ</Text>
        </View>
        <Ionicons name="phone-portrait-outline" size={26} color={colors.text} style={styles.icon} />
        <Ionicons name="checkmark-circle" size={30} color={colors.green} style={styles.icon} />
        <Pressable onPress={() => setPlaying(!playing)} hitSlop={10}>
          <Ionicons name={playing ? 'pause' : 'play'} size={30} color={colors.text} />
        </Pressable>
      </View>
      <View style={styles.track}>
        <View style={styles.progress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute', left: 8, right: 8, bottom: 90,
    backgroundColor: '#75601f', borderRadius: 10, padding: 8,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  cover: { width: 44, height: 44, borderRadius: 4, backgroundColor: '#f5c518' },
  info: { flex: 1, marginLeft: 12 },
  title: { color: colors.text, fontSize: 16, fontWeight: '700' },
  artist: { color: '#d9cfa8', fontSize: 14 },
  icon: { marginRight: 16 },
  track: { height: 3, borderRadius: 2, backgroundColor: 'rgba(255,255,255,0.3)', marginTop: 8 },
  progress: { width: '40%', height: 3, borderRadius: 2, backgroundColor: '#fff' },
});