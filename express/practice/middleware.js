// Create a new project.

// 1. Install nodemon and express.
// 2. Add two dummy middleware that logs request path and request method respectively.
// 3. Add a third middleware that returns a response.
// 4. Now add handling using two more middleware that handle path /, a request to /contact-us page.
// 5. Contact us should return a form with name and email as input fields that submits to /contact-us page also.
// 6. Also handle POST incoming request to /contact-us path using a separate middleware.


const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("Request Path:", req.path);
  next();
});

app.use((req, res, next) => {
  console.log("Request Method:", req.method);
  next();
});

app.use("/", (req, res, next) => {
  if (req.path === "/" && req.method === "GET") {
    return res.send("Welcome to the homepage!");
  }
  next();
});

app.get('/contact-us', (req, res) => {
  res.send(`
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter name" required />
      <input type="email" name="email" placeholder="Enter email" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/contact-us', (req, res) => {
  const { name, email } = req.body;
  res.send(`Received: Name = ${name}, Email = ${email}`);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});