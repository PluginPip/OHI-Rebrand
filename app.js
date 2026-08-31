const http = require('http');
const { parse } = require('url');
const next = require('next');

const dev = false;
const hostname = '127.0.0.1';

const app = next({
  dev,
  hostname,
  dir: __dirname,
});

const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = http.createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
      } catch (error) {
        console.error('WorkWell request error:', error);
        res.statusCode = 500;
        res.end('Internal server error');
      }
    });

    server.listen('passenger', () => {
      console.log('WorkWell started under Plesk Passenger');
    });
  })
  .catch((error) => {
    console.error('WorkWell startup error:', error);
    process.exit(1);
  });
