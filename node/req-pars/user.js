const http = require("http");
const fs = require("fs");

const requestListners = (req, res) => {
  console.log(req.url);

  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Request and Response</title></head>");
    res.write("<body><h1>Enter your detail:</h1>");

    res.write(`
      <form action="/submit" method="POST">
        <label>Username: </label>
        <input type="text" name="username" /><br><br>

        <label>Gender: </label>
        <input type="radio" name="gender" value="male"> Male
        <input type="radio" name="gender" value="female"> Female
        <br><br>

        <button type="submit">Submit</button>
      </form>
    `);

    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (req.url.toLowerCase() === "/submit" && req.method === "POST") {
    let body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const formData = Buffer.concat(body).toString();
      console.log("Form Data:", formData);

      fs.writeFileSync("user.txt", formData);

      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });

    return; 
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Page Not Found</h1>");
  return res.end();
};

const server = http.createServer(requestListners);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
