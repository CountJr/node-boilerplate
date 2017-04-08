import http from 'http';
// import User from './User';

const server = new http.Server((req, res) => {
    console.log(req.method, req.url);
    res.end('hello, vasja');
});
// const vasja = new User('vasja');

//      vasja.hello();

server.listen(8080);
