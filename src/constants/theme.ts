export const darkColors = {
  bg: '#121212',
  surface: '#1f1f1f',
  surfaceLight: '#2a2a2a',
  text: '#ffffff',
  textSecondary: '#a7a7a7',
  border: '#2a2a2a',
  green: '#1ed760',
};

// Palette from my earlier Instagram-style project
export const lightColors = {
  bg: '#ffffff',
  surface: '#f2f2f2',
  surfaceLight: '#dbdbdb',
  text: '#262626',
  textSecondary: '#8e8e8e',
  border: '#dbdbdb',
  green: '#1ed760',
};

export type Colors = typeof darkColors;

// Default theme. We'll add a light/dark toggle later for the bonus marks.
export const colors: Colors = darkColors;

export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24 };