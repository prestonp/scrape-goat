import https from 'https';
import http from 'http';

export default function(url, done) {
  const protocol = url.match(/^https/) ? https : http;
  protocol.get(url, (res) => {
    let body = '';
    res.on('data', chunk => body += chunk)
       .on('end', () => done(null, res, body));
  }).on('error', done);
}
