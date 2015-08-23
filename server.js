import http from 'http';
import log from './lib/log';
import scrape from './lib/scrape';
import { parseQuery, parsePath } from './lib/uri';

const port = process.env.VCAP_APP_PORT || process.env.port || 3000;
const server = http.createServer();

const router = {
  '/': function(req, res) {
    const query = parseQuery(req.url);
    scrape(query.url, query.selector, response => {
      res.setHeader('Content-Type', 'application/json');
      res.write(JSON.stringify(response));
      res.end();
    });
  }
};

const route = function(req, res) {
  log(req);
  const path = parsePath(req.url);
  if (path in router) {
    router[path](req, res);
  } else {
    res.write('Could not find route ' + req.url);
    res.statusCode = 404;
    res.end();
  }
};

server.on('request', route);
server.listen(port, () => console.log('listening on port', port));
