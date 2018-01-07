import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

describe('Search', () => {
  let fetchedStub;
  let promise;
  let spotify;
  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo',
    });
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });
  afterEach(() => {
    fetchedStub.restore();
  });
  describe('smoke tests', () => {
    it('should exists the searchAlbums method', () => {
      expect(spotify.search.albums).to.exist;
    });
    it('should exists the searchArtists method', () => {
      expect(spotify.search.artists).to.exist;
    });
    it('should exists the searchTracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });
    it('should exists the searchPlaylists method', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });
  describe('Search Artists', () => {
    it('should call fetch function', () => {
      const artists = spotify.search.artists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it('should call fetch to the correct url', () => {
      const artists = spotify.search.artists('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
    });
  });
  describe('Search Albums', () => {
    it('should call fetch function', () => {
      const albums = spotify.search.albums('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it('should call fetch to the correct url', () => {
      const albums = spotify.search.albums('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
    });
  });
  describe('Search Tracks', () => {
    it('should call fetch function', () => {
      const tracks = spotify.search.tracks('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it('should call fetch to the correct url', () => {
      const tracks = spotify.search.tracks('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');
    });
  });
  describe('Search Playlists', () =>  {
    it('should call fetch function', () => {
      const playlists = spotify.search.playlists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it('should call fetch to the correct url', () => {
      const playlists = spotify.search.playlists('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');
    });
  });
});
