const http = require("http");

const PORT = Number(process.argv[2]);

const server = http.createServer((req, res) => {
    res.write("This is home page.");
    res.end();
});

server.listen(PORT);
