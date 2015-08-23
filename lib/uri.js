const url = require('url');

const parseUri = function(attr) {
  return uri => url.parse(uri, true)[attr];
};

export const parsePath = parseUri('pathname');
export const parseQuery = parseUri('query');
