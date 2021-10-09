const http = require("http");
const fs = require("fs");
const path = require("path");
// import http from "http";
const server = http.createServer((req, res) => {
  // console.log(req);
  // console.log(req.body);
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "./public", "index.html"),
      "utf8",
      (err, data) => {
        if (err) {
          throw err;
        }
        res.writeHead(200, "Content-Type: text/html");
        res.end(data);
      }
    );
  }
  if (req.url === "/about-us") {
    fs.readFile(
      path.join(__dirname, "./public", "about.html"),
      "utf8",
      (err, data) => {
        if (err) {
          throw err;
        }
        res.writeHead(200, "Content-Type: text/html");
        res.end(data);
      }
    );
  }
  if (req.url === "/api/users/data") {
    const user = [
      {
        name: "Tim",
        age: "12",
      },
      {
        name: "John",
        age: 26,
      },
    ];

    res.writeHead(200, "Content-Type: application/json");
    res.end(JSON.stringify(user));
  }
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`server is listening at port:${PORT}`);
});

// 2xx - success
// 3xx - not modified
// 4xx - FE
// 5xx -
