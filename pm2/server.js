const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    const arr = []
    for (let index = 0; index < 1000000; index++) {
        arr.push('some data')
    }
    res.write("This is home page.");
    res.end();
});

server.listen(PORT);
