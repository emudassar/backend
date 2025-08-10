import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

// const staticPath = path.join(import.meta.dirname, "public");

// app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

app.get("/profile/:username", (req, res) => {
  console.log(req.params);
  res.send(`hii ${req.params.username}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`); 
});
