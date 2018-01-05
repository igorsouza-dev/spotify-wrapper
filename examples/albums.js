import { searchAlbums } from '../src/main';
console.log('fuck');

global.fetch = require('node-fetch');


const albums = searchAlbums('Slipknot');

albums.then(data => console.log(data));
