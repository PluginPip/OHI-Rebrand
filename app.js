const http = require('http');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT;

if (!port) {
  throw new Error('PORT environment variable is required when running under Plesk Passenger.');
}

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http.createServer((req, res) => handle(req, res)).listen(port, () => {
    console.log(`WorkWell staging ready on Passenger port ${port}`);
  });
}).catch((error) => {
  console.error('Failed to start WorkWell staging:', error);
  process.exit(1);
});
