const http = require("http");
const calculatorPage = require("./calculator");
const calculatorResult = require("./calculate-result");

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Home</title></head>
        <body>
          <h1>Welcome</h1>

          <a href="/calculator">Go to Calculator</a>
        </body>
      </html>
    `);
    return res.end();
  }

  if (req.url === "/calculator" && req.method === "GET") {
    return calculatorPage(req, res);
  }

  if (req.url === "/calculate-result" && req.method === "POST") {
    return calculatorResult(req, res);
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Page Not Found</h1>");
  return res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
