import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');

const spotify = new SpotifyWrapper({
  token: 'BQB6Wa6PLthqHythjEGt2x7cTKoyQlt1ftvFD06eCikEDZc8eFHMafhNfIYUgO-OgUXpFMaXLUhSzFmeIaboUGbZAAxbncsyKuA61WQnrSdKRGQkjSEPBhT3l5o8ysIqw6vcFdgQIEnBIucw',
});
const albums = spotify.search.albums('Slipknot');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
