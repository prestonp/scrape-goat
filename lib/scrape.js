import request from './request';
import cheerio from 'cheerio';

export default function(url, selector, callback) {
  request(url, (err, response, body) => {
    console.log(err);
    try {
      const $ = cheerio.load(body);
      const $tag = $(selector);
      const results = $tag.map( (idx, el) => $(el).html() || $(el).val() ).get();
      callback({
        status: response.statusCode,
        results: results,
        url: url,
        selector: selector
      });
    } catch(e) {
      callback({
        status: response.statusCode,
        results: null,
        url: url,
        selector: selector
      });
    }
  });
}
