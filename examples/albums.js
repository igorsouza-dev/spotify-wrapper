import { searchAlbums } from '../src/search';

global.fetch = require('node-fetch');


const albums = searchAlbums('Slipknot');

albums.then(data => console.log(data));
