require('babel/register');
const assert = require('assert');
const uri = require('../lib/uri');

describe('uri', function() {
  it('should parse query', function() {
    const query = uri.parseQuery('http://blah.com?foo=211&url=lolol');
    assert(query.foo === '211' && query.url === 'lolol');
  });

  it('should parse pathname', function() {
    const path = uri.parsePath('http://blah.com?foo=211&url=lolol');
    assert(path === '/');
  });

  it('should parse pathname for nested resources', function() {
    const path = uri.parsePath('http://blah.com/foo/bar/wiz?foo=211&url=lolol');
    assert(path === '/foo/bar/wiz');
  });
});
