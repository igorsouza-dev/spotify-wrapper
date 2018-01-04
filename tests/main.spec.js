import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import { search, searchAlbums, searchArtists, searchPlaylists, searchTracks } from '../src/main';

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

describe('Spotify Wrapper', () => {
  let fetchedStub;
  let promise;
  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });
  afterEach(() => {
    fetchedStub.restore();
  });
  describe('smoke tests', () => {
    it('should exists the search method', () => {
      expect(search).to.exist;
    });
    it('should exists the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });
    it('should exists the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });
    it('should exists the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });
    it('should exists the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });
  describe('Generic Search', () => {
    it('should call the fetch function', () => {
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;
    });
    it('should call the correct url', () => {
      context('passing one type', () => {
        const artists = search('Slipknot', 'artist');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Slipknot&type=artist');

        const album = search('Slipknot', 'album');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Slipknot&type=album');
      });
      context('passing more than one type', () => {
        const artistsAndAlbuns = search('Slipknot', ['artist', 'album']);
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Slipknot&type=artist,album');
      });
    });
    it('should return the JSON data from the Promise', () => {
      promise.resolves({ body: 'json' });
      const artists = search('Slipknot', 'artist');
      expect(artists.resolveValue).to.be.eql({ body: 'json' });
    });
  });
  describe('Search Artists', () => {
    it('should call fetch function', () => {
      const artists = searchArtists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it('should call fetch to the correct url', () => {
      const artists = searchArtists('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
    });
  });
});
