# Spotify Clone (Expo)

A multi-screen mobile app built with Expo, React Native and TypeScript. It recreates the layout and navigation of the Spotify mobile app.

**Student:** [Sebastian Pedersen] · **Student ID:** [000981815] · **Course:** [CPRG 303-B]

## Reference app

Spotify (iOS). Reference screenshots of the screens I recreated are in the `reference/` folder: Home, Search, Your Library, the Create menu and a playlist (Liked Songs).

## Screens

| Screen | File | Description |
| --- | --- | --- |
| Home | `src/app/(tabs)/index.tsx` | Filter chips, quick-pick grid, "Tell Spotify what to play" bar and horizontal shelves |
| Search | `src/app/(tabs)/search.tsx` | Search bar that filters playlists as you type |
| Your Library | `src/app/(tabs)/library.tsx` | Filter chips and a list of playlists and artists |
| Create | `src/app/create-sheet.tsx` | Bottom sheet that slides up over the current screen |
| Playlist | `src/app/playlist/[id].tsx` | Gradient header and track list, opened with a navigation parameter |

## Navigation

- **Tab navigation:** Home, Search, Your Library and Create (`src/app/(tabs)/_layout.tsx`).
- **Stack navigation:** the root Stack (`src/app/_layout.tsx`) holds the tabs, the playlist screen and the Create sheet. Tapping a playlist pushes `playlist/[id]` and passes the playlist `id` as a route parameter.
- The Create tab is intercepted so it opens a transparent modal instead of a normal tab screen.

## Reusable components

`FilterChip`, `PlaylistRow`, `TrackRow`, `Shelf` and `MiniPlayer` in `src/components/`. Colors and spacing live in `src/constants/theme.ts`, and the mock data lives in `src/data/music.ts`.

## Project structure

```
src/
  app/
    _layout.tsx          root Stack
    create-sheet.tsx     Create bottom sheet
    (tabs)/              tab screens and tab layout
    playlist/[id].tsx    playlist detail screen
  components/            reusable components
  constants/theme.ts     colors and spacing
  data/music.ts          mock playlists, tracks and shelves
```

## Run it

```bash
npm install
npx expo start
```

Then scan the QR code with Expo Go on your phone. If your phone can't connect over Wi-Fi, use `npx expo start --tunnel`.

## Notes

- All data is mock data. There is no backend or login.
- Covers are solid colors instead of album images.
- There is finished images in the respected folder, same with references.
