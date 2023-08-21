const mapping: Record<string, string> = {
  platforms: 'platform',
  providers: 'provider',
  'share-links': 'share_link',
  songs: 'song',
  'song-platforms': 'song_platform',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
