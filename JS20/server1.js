const http = require('http');

const server = http.createServer(function(req, res) {
    console.log(`${req.method} ${req.url}`);
    res.end('Hello World!');
});

const port = 8080;
server.listen(port, function() {
    console.log(`サーバーをポート${port}で開始`);
});