
const { console } = require('console');

const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html')

    if(req.url=='/lappy'){
        req.statusCode=200;
        const data= fs.readfileSync('index.html');
    res.end(data.toString());
    }
    else if(req.url=='/login'){
        req.statusCode=200;
        const data= fs.readfileSync('7.html');
    res.end(data.toString());
    }
    else if(req.url=='/signup'){
        req.statusCode=200;
        const data= fs.readfileSync('m.html');
    res.end(data.toString());
    }
    else{
        res.statusCode=404;
        res.end(<h1>page not found</h1>)
    }
})

server.listen(port, () => {
    console.log('server is listening on port ${port}');
});