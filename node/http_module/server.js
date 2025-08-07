const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Mudassar Khan");
    res.end();
  }

  if (req.url === "/about") {
    res.write("I am a web developer, building scalable web applications.");
    res.end();
  }

  if (req.url === "/contact") {
    res.setHeader("Content-Type", "text/html")
    res.write("<h1>email: contacmudassar@gmail.com</h1>");
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Listning on PORT: ${PORT}`);
});
