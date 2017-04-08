import http from 'http';
import url from 'url';
// import User from './User';

const server = new http.Server((req, res) => {
    console.log(/*req.method, req.url, url.parse(req.url, true)*/ req.headers);
    const urlParsed = url.parse(req.url, true);
    if (urlParsed.pathname === '/echo' && urlParsed.query.message) {
        res.end(urlParsed.query.message);
    } else {
        res.statusCode = 404;
        res.end('page not found');
    }
    
});
// const vasja = new User('vasja');

//      vasja.hello();

server.listen(8080);
