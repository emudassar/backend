const add = require("./add");

const calculatorResult = (req, res) => {
  let body = [];

  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();  
    console.log("Form Data:", parsedBody);

    const params = new URLSearchParams(parsedBody);
    const num1 = Number(params.get("num1"));
    const num2 = Number(params.get("num2"));

    const result = add(num1, num2);

    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Result</title></head>
        <body>
          <h1>Result Page</h1>
          <p><strong>Sum = ${result}</strong></p>

          <br>
          <a href="/calculator">Back to Calculator</a>
        </body>
      </html>
    `);
    return res.end();
  });
};

module.exports = calculatorResult;
