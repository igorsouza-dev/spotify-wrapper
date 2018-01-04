export const search = (query, type) =>
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
    .then(data => data.json());

export const searchAlbums = query =>
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=album`);
export const searchTracks = () => {};
export const searchArtists = query =>
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=artist`);
export const searchPlaylists = () => {};
