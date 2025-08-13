import express from "express";
import { readFile } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFile = path.join(__dirname, "data", "links.json");

fs.readFile(dataFile, "utf8", (err, data) => {
  if (err) throw err;
  const savedData = JSON.parse(data);
  console.log(savedData);
});

app.post("/shorten", (req, res) => {
  console.log(req.body);
  res.send("Data received");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
