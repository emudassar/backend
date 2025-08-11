import express from "express";
import { PORT } from "./env.js";
import path, { join } from "path";

const app = express();

const staticPath = path.join(import.meta.dirname, "public");

app.use(express.static(staticPath));

app.use(express.urlencoded())

// app.get("/", (req, res) => {
//   res.send("Welcome to the home page!");
// });

// app.get("/profile/:username", (req, res) => {
//   console.log(req.params);
//   res.send(`hii ${req.params.username}`);
// });

// app.get("/contact", (req, res) => {
//   console.log(req.query);
//   res.redirect("/");
// });

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.use((req, res) => {
return res.status(404).sendFile(path.join(import.meta.dirname, "views", "404.html"))
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
