'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchArtists = exports.searchTracks = exports.searchAlbums = exports.search = undefined;

var _config = require('./config');

var _utils = require('./utils');

var search = exports.search = function search(query, type) {
  return fetch(_config.API_URL + '/search?q=' + query + '&type=' + type, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer 5d2889a8bf90488dae0c8cc1973ed2cd'
    }
  }).then(_utils.toJSON);
};

var searchAlbums = exports.searchAlbums = function searchAlbums(query) {
  return search(query, 'album');
};
var searchTracks = exports.searchTracks = function searchTracks(query) {
  return search(query, 'track');
};
var searchArtists = exports.searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};
var searchPlaylists = exports.searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};