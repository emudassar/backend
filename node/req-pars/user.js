
const fs = require("fs");
const { URLSearchParams } = require("url");

const requestHandler = (req, res) => {
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

      const params = new URLSearchParams(formData)

      // const bodyObject = {}
      // for (const [key, val] of params.entries()){
      //   bodyObject[key] = val
      // }

      const bodyObject = Object.fromEntries(params)
      console.log(bodyObject);
      

      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));

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

module.exports = requestHandler