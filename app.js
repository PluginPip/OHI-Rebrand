const http = require('http');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = http.createServer((req, res) => handle(req, res));

    server.listen(port, () => {
      console.log(`WorkWell staging ready on ${process.env.PORT ? 'Passenger' : 'standalone'} listener ${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start WorkWell staging:', error);
    process.exit(1);
  });
