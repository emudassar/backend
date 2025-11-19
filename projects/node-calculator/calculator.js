const calculatorPage = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head><title>Calculator</title></head>
      <body>
        <h1>Calculator</h1>

        <form action="/calculate-result" method="POST">
          <input type="number" name="num1" placeholder="Enter number 1" required>
          <input type="number" name="num2" placeholder="Enter number 2" required>
          <button type="submit">Sum</button>
        </form>
      </body>
    </html>
  `);

  return res.end();
};

module.exports = calculatorPage;
