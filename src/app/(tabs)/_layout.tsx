import { ComponentProps } from 'react';
import { ColorValue, View } from 'react-native';
import { Tabs, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/theme';
import MiniPlayer from '../../components/MiniPlayer';

type IconName = ComponentProps<typeof Ionicons>['name'];

function icon(active: IconName, inactive: IconName) {
  return ({ focused, color }: { focused: boolean; color: ColorValue }) => (
    <Ionicons name={focused ? active : inactive} size={26} color={color} />
  );
}

export default function TabLayout() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.text,
          tabBarInactiveTintColor: colors.textSecondary,
          tabBarStyle: { backgroundColor: colors.bg, borderTopWidth: 0, height: 85, paddingTop: 8 },
          tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
        }}
      >
        <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: icon('home', 'home-outline') }} />
        <Tabs.Screen name="search" options={{ title: 'Search', tabBarIcon: icon('search', 'search-outline') }} />
        <Tabs.Screen name="library" options={{ title: 'Your Library', tabBarIcon: icon('library', 'library-outline') }} />
        <Tabs.Screen
          name="create"
          options={{ title: 'Create', tabBarIcon: icon('add', 'add') }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault(); // stay on the current tab
              router.push('/create-sheet'); // and slide the sheet up over it
            },
          }}
        />
      </Tabs>
      <MiniPlayer />
    </View>
  );
}