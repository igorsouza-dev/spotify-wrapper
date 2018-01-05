import { API_URL } from './config';
import { toJSON } from './utils';

export const search = (query, type) =>
  fetch(`${API_URL}/search?q=${query}&type=${type}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer 5d2889a8bf90488dae0c8cc1973ed2cd',
    },
  }).then(toJSON);

export const searchAlbums = query =>
  search(query, 'album');
export const searchTracks = query =>
  search(query, 'track');
export const searchArtists = query =>
  search(query, 'artist');
export const searchPlaylists = query =>
  search(query, 'playlist');
