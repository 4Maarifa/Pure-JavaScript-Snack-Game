const http = require("http");
var fs = require("fs");
const { throws } = require("assert");

const PORT = 8080;

fs.readFile("./index.html", (err, data) => {
  if (err) throw err;

  http
    .createServer((req, res) => {
      res.writeHead(200, { "Content-type": "application/javascript" });
      res.write(data);
      res.end();
    })
    .listen(PORT);
});
console.log("Server Listen :8081");
