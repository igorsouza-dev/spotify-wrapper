export const search = (query, type) =>
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer 5d2889a8bf90488dae0c8cc1973ed2cd',
    },
  })
    .then(data => data.json());

export const searchAlbums = query =>
  search(query, 'album');
export const searchTracks = query =>
  search(query, 'track');
export const searchArtists = query =>
  search(query, 'artist');
export const searchPlaylists = query =>
  search(query, 'playlist');
