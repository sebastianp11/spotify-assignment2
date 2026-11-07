export type Playlist = {
  id: string;
  title: string;
  subtitle: string;
  kind: 'playlist' | 'artist' | 'album';
  color: string; // placeholder cover colour
};

export type Track = {
  id: string;
  title: string;
  artist: string;
  hasVideo?: boolean;
};

export const playlists: Playlist[] = [
  { id: 'liked', title: 'Liked Songs', subtitle: 'Playlist • you', kind: 'playlist', color: '#4b3fd6' },
  { id: 'bass', title: 'Bass Boosted', subtitle: 'Playlist • you', kind: 'playlist', color: '#c026d3' },
  { id: 'dj', title: 'DJ', subtitle: 'Tap to start', kind: 'playlist', color: '#1d4ed8' },
  { id: 'cinematic', title: 'Cinematic Late-Night Ranked', subtitle: 'Prompted Playlist • Made for you', kind: 'playlist', color: '#16a34a' },
  { id: 'coldplay', title: 'Coldplay', subtitle: 'Artist', kind: 'artist', color: '#0ea5e9' },
  { id: 'arlo', title: 'My Boy Arlo', subtitle: 'Artist', kind: 'artist', color: '#b45309' },
  { id: 'birthday', title: 'Birthday 2025', subtitle: 'Playlist • you', kind: 'playlist', color: '#991b1b' },
];

export const tracks: Track[] = [
  { id: 't1', title: 'Money On The Dash', artist: 'LUCØ and Alice Gray' },
  { id: 't2', title: 'Prey & The Hunter', artist: 'Jack Harris', hasVideo: true },
  { id: 't3', title: 'FEVER DREAM', artist: 'Alex Warren', hasVideo: true },
  { id: 't4', title: 'Chasing Shadows', artist: 'Alex Warren', hasVideo: true },
  { id: 't5', title: 'Save You a Seat', artist: 'Alex Warren' },
  { id: 't6', title: 'Burning Down', artist: 'Alex Warren' },
  { id: 't7', title: 'Getaway Car', artist: 'Alex Warren' },
];

export const shelves: { title: string; items: Playlist[] }[] = [
  {
    title: "It's New Music Friday!",
    items: [
      { id: 'nmf', title: 'NEW MUSIC FRIDAY', subtitle: 'Lil Baby, Kings of Leon, Bryan Adams, Lizzy McAlpine', kind: 'playlist', color: '#ca8a04' },
      { id: 'radar', title: 'Release Radar', subtitle: 'Catch all the latest music from artists you follow', kind: 'playlist', color: '#7e22ce' },
      { id: 'best', title: 'Best of the Week', subtitle: 'Drake, Mustard, Fontaines D.C. and more', kind: 'playlist', color: '#4d7c0f' },
    ],
  },
  {
    title: 'Friday drops picked for you',
    items: [
      { id: 'drop1', title: 'My Father’s Son', subtitle: 'Robert Grace', kind: 'album', color: '#166534' },
      { id: 'drop2', title: 'Late Night Drive', subtitle: 'Fresh finds for your evening', kind: 'playlist', color: '#1e3a5f' },
      { id: 'drop3', title: 'Green Room', subtitle: 'New indie and alt', kind: 'playlist', color: '#854d0e' },
    ],
  },
];

// Looks in the library and in the Home shelves
export function getPlaylist(id: string): Playlist | undefined {
  return [...playlists, ...shelves.flatMap((s) => s.items)].find((p) => p.id === id);
}