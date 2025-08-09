import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

const staticPath = path.join(import.meta.dirname, "public")
app.use(express.static(staticPath))

// app.get("/", (req, res) => {
//   const homePagePath = path.join(import.meta.dirname, "public", "index.html");
//   res.sendFile(homePagePath);
// });

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
