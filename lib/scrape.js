import request from './request';
import cheerio from 'cheerio';

export default function(url, selector, callback) {
  if (!url) return callback({ status: 500, error: 'Missing url query' });
  if (!selector) return callback({ status: 500, error: 'Missing selector query' });
  request(url, (err, response, body) => {
    if (err) return callback({ status: 500, error: err });
    const $ = cheerio.load(body);
    const $tag = $(selector);
    const results = $tag.map( (idx, el) => $(el).html() || $(el).val() ).get();
    callback({
      status: response.statusCode,
      results: results,
      url: url,
      selector: selector
    });
  });
}
