import http from 'http';
import url from 'url';
import fs from 'fs';
import path from 'path';
import { subscribe, publish } from './chat';
// import User from './User';

const sendFile = (fileName, res) => {
  const fileStream = fs.createReadStream(fileName);
  // debugger;
  fileStream
    .on('error', (err) => {
      // console.log(__dirname);
      // console.log(err);
      res.statusCode = 500;
      res.end(`server error ${err}`);
    })
    .pipe(res)
    .on('close', () => {
      fileStream.destroy();
    });
};

http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      sendFile(path.join(__dirname, 'index.html'), res);
      break;

    case '/subscribe':
      subscribe(req, res);
      break;

    case '/publish': {

      console.log('...');

      let body = '';

      req
        .on('readable', () => {
          let chunk = req.read()
          body += chunk ? chunk : '';
          if (body.length > 1e4) {
            res.statusCode = 413;
            res.end('too big message');
          }
        })
        .on('end', () => {
          console.log(`--${body}--`);
          try {
            body = JSON.parse(body);
          } catch (e) {
            res.statusCode = 400;
            res.end('bad request');
            return;
          }
          publish(body.message);
          res.end('ok');
        });
      // publish('...');
      break;
    }
    default:
      res.statusCode = 404;
      res.end('Not found');

  }
}).listen(8080);


// const server = new http.Server((req, res) => {
//     console.log(/*req.method, req.url, url.parse(req.url, true)*/ req.headers);
//     const urlParsed = url.parse(req.url, true);
//     if (urlParsed.pathname === '/echo' && urlParsed.query.message) {
//         res.end(urlParsed.query.message);
//     } else {
//         res.statusCode = 404;
//         res.end('page not found');
//     }
// wewcd
// });
// // const vasja = new User('vasja');

// //      vasja.hello();

// server.listen(8080);
