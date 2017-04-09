import http from 'http';
import url from 'url';
import fs from 'fs';
import chat from './chat.js';
// import User from './User';

const sendFile = (fileName, res) => {
    const fileStream = fs.createReadStream(fileName);
    fileStream
        .on('error', () => {
            res.statusCode = 500;
            res.end('server error');
        })
        .pipe(res)
        .on('close', () => {
            fileStream.destroy();
        })
};

http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            sendFile("index.html", res);
            break;
        case '/subscribe':
            chat.subscribe(req, res);
            
            break;
        case '/publish':
            chat.publish('...');
            break;
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
    
// });
// // const vasja = new User('vasja');

// //      vasja.hello();

// server.listen(8080);
