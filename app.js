const http = require('http');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || '127.0.0.1';
const port = Number(process.env.PORT || 3000);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http.createServer((req, res) => handle(req, res)).listen(port, hostname, () => {
    console.log(`WorkWell staging ready on http://${hostname}:${port}`);
  });
}).catch((error) => {
  console.error('Failed to start WorkWell staging:', error);
  process.exit(1);
});
