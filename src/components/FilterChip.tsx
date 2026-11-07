import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/theme';

type Props = { label: string; active?: boolean; onPress?: () => void };

export default function FilterChip({ label, active = false, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={[styles.chip, active && styles.chipActive]}>
      <Text style={[styles.label, active && styles.labelActive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.surface,
    marginRight: 8,
  },
  chipActive: { backgroundColor: colors.green },
  label: { color: colors.text, fontSize: 14, fontWeight: '600' },
  labelActive: { color: '#000' },
});