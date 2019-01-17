const assert = require('assert');

/*
Unit testing valid URL 
*/
const isValidUrl = require('../src/utils/isValidUrl');
describe('~~> URL validity', () => {
  describe('True', () => {
    it('https://www.google.com/search?q=align+divs+center&oq=align+divs+center&aqs=chrome..69i57j69i60j0l4.3515j0j1&sourceid=chrome&ie=UTF-8', () => {
      assert(isValidUrl('https://www.google.com/search?q=align+divs+center&oq=align+divs+center&aqs=chrome..69i57j69i60j0l4.3515j0j1&sourceid=chrome&ie=UTF-8'));
    });
    it('http://10.0.1.113:8080/api/v1/', () => {
      assert(isValidUrl('http://10.0.1.113:8080/api/v1/'));
    });
    it('http://localhost:8080/api/v1/', () => {
      assert(isValidUrl('http://10.0.1.113:8080/api/v1/'));
    });
  });
  describe('False', () => {
    it('www.google.com/search?q=align+divs+center&oq=align+divs+center&aqs=chrome..69i57j69i60j0l4.3515j0j1&sourceid=chrome&ie=UTF-8', () => {
      assert(!isValidUrl('www.google.com/search?q=align+divs+center&oq=align+divs+center&aqs=chrome..69i57j69i60j0l4.3515j0j1&sourceid=chrome&ie=UTF-8'));
    });
    it('http://10.0.1.113:8080/api/v1/ //', () => {
      assert(!isValidUrl('http://10.0.1.113:8080/api/v1/ //'));
    });
    it('goog', () => {
      assert(!isValidUrl('goog'));
    });
  });
});

/* 
Unit testing encoder and decoder
*/
const {
  encoder,
  decoder
} = require('../src/utils/index');
describe('~~> Encoder and Decoder', () => {
  const encoded = 'NtR';
  const value = 100001
  it('should encode the value', () => {
    assert.equal(encoder(value), encoded);
  });
  it('should decode the value', () => {
    assert.equal(decoder(encoded), value);
  });
})