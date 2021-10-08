const { console } = require('console');

const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html')
    res.end('<h1>hey this is mario</h1> <p>thier is a way to rock the world</p>');
})

server.listen(port, () => {
    console.log('server is listening on port ${port}');
});