import { ComponentProps } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/theme';

type IconName = ComponentProps<typeof Ionicons>['name'];

const options: { icon: IconName; title: string; subtitle: string; beta?: boolean }[] = [
  { icon: 'musical-notes', title: 'Playlist', subtitle: 'Create a playlist with songs or episodes' },
  { icon: 'people', title: 'Collaborative playlist', subtitle: 'Create a playlist together with friends' },
  { icon: 'options', title: 'Mixed Playlist', subtitle: 'Mix songs with smooth transitions', beta: true },
  { icon: 'contrast', title: 'Blend', subtitle: 'Combine your friends’ tastes into a playlist' },
  { icon: 'code-slash', title: 'Prompted Playlist', subtitle: 'Generate a playlist that curates and updates', beta: true },
  { icon: 'radio', title: 'Jam', subtitle: 'Listen together from anywhere' },
  { icon: 'folder', title: 'Folder', subtitle: 'Organize your playlists' },
];

export default function CreateScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.sheet}>
        <View style={styles.handle} />
        {options.map((o) => (
          <Pressable key={o.title} style={styles.row}>
            <View style={styles.iconCircle}>
              <Ionicons name={o.icon} size={26} color={colors.textSecondary} />
            </View>
            <View style={styles.info}>
              <View style={styles.titleRow}>
                <Text style={styles.title}>{o.title}</Text>
                {o.beta && (
                  <View style={styles.beta}>
                    <Text style={styles.betaText}>Beta</Text>
                  </View>
                )}
              </View>
              <Text style={styles.subtitle}>{o.subtitle}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'flex-end' },
  sheet: {
    backgroundColor: colors.surface, borderTopLeftRadius: 28, borderTopRightRadius: 28,
    paddingHorizontal: 16, paddingTop: 12, paddingBottom: 24,
  },
  handle: {
    alignSelf: 'center', width: 40, height: 4, borderRadius: 2,
    backgroundColor: colors.textSecondary, marginBottom: 12,
  },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
  iconCircle: {
    width: 54, height: 54, borderRadius: 27, backgroundColor: colors.surfaceLight,
    alignItems: 'center', justifyContent: 'center',
  },
  info: { flex: 1, marginLeft: 14 },
  titleRow: { flexDirection: 'row', alignItems: 'center' },
  title: { color: colors.text, fontSize: 18, fontWeight: '700' },
  subtitle: { color: colors.textSecondary, fontSize: 14, marginTop: 2 },
  beta: { backgroundColor: colors.green, borderRadius: 4, paddingHorizontal: 6, paddingVertical: 2, marginLeft: 8 },
  betaText: { color: '#000', fontSize: 11, fontWeight: '700' },
});