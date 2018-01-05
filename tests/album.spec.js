import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';

sinonStubPromise(sinon);
chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Album', () => {
  let stubedFetch;
  let promise;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise();
  });
  afterEach(() => {
    stubedFetch.restore();
  });
  describe('Smoke tests', () => {
    it('should have getAlbum', () => {
      expect(getAlbum).to.exist;
    });
    it('should have getAlbumTracks', () => {
      expect(getAlbumTracks).to.exist;
    });
  });
  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('should call the correct url', () => {
      const album = getAlbum('hsuhdushudfh');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/hsuhdushudfh');
    });
    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name' });
      const album = getAlbum('hsuhdushudfh');
      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });
  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const albums = getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('should call the correct url', () => {
      const albums = getAlbums(['hsuhdushudfh', 'chvuxuvxuhxcvu']);
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=hsuhdushudfh,chvuxuvxuhxcvu');
    });
    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name' });
      const albums = getAlbums(['hsuhdushudfh', 'chvuxuvxuhxcvu']);
      expect(albums.resolveValue).to.be.eql({ album: 'name' });
    });
  });
  describe('getAlbumTracks', () => {
    it('should call fetch method', () => {
      const albums = getAlbumTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('should call the correct url', () => {
      const albums = getAlbumTracks('hsuhdushudfh');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/hsuhdushudfh/tracks');
    });
    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name' });
      const albums = getAlbumTracks('hsuhdushudfh');
      expect(albums.resolveValue).to.be.eql({ album: 'name' });
    });
  });
});
