import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import SpotifyWrapper from '../src/index';

sinonStubPromise(sinon);
chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Album', () => {
  let stubedFetch;
  let promise;
  let spotify;
  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo',
    });
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise();
  });
  afterEach(() => {
    stubedFetch.restore();
  });
  describe('Smoke tests', () => {
    it('should have getAlbum', () => {
      expect(spotify.album.getAlbum).to.exist;
    });
    it('should have getAlbumTracks', () => {
      expect(spotify.album.getAlbumTracks).to.exist;
    });
  });
  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = spotify.album.getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('should call the correct url', () => {
      const album = spotify.album.getAlbum('hsuhdushudfh');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/hsuhdushudfh');
    });
    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name' });
      const album = spotify.album.getAlbum('hsuhdushudfh');
      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });
  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const albums = spotify.album.getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('should call the correct url', () => {
      const albums = spotify.album.getAlbums(['hsuhdushudfh', 'chvuxuvxuhxcvu']);
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=hsuhdushudfh,chvuxuvxuhxcvu');
    });
    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name' });
      const albums = spotify.album.getAlbums(['hsuhdushudfh', 'chvuxuvxuhxcvu']);
      expect(albums.resolveValue).to.be.eql({ album: 'name' });
    });
  });
  describe('getAlbumTracks', () => {
    it('should call fetch method', () => {
      const albums = spotify.album.getAlbumTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('should call the correct url', () => {
      const albums = spotify.album.getAlbumTracks('hsuhdushudfh');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/hsuhdushudfh/tracks');
    });
    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name' });
      const albums = spotify.album.getAlbumTracks('hsuhdushudfh');
      expect(albums.resolveValue).to.be.eql({ album: 'name' });
    });
  });
});
