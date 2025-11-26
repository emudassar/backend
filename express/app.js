const express = require("express");

const app = express();

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

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});