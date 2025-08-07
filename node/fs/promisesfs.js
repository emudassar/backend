
const fs = require("fs");
const path = require("path");

const fileName = "promisesFs.txt";
const filePath = path.join(__dirname, fileName);

// const file = __dirname
// fs.promises
//   .readdir(file) 
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// fs .promises.writeFile(filePath, "this is test file for promises", "utf-8")
// .then(console.log("File created successfully"))
// .catch((err) => console.error(err));

// fs .promises.appendFile(filePath, "\nThis is the updated test file for promises", "utf-8")
// .then(console.log("File updated successfully"))
// .catch((err) => console.error(err));

// fs .promises.readFile(filePath, "utf-8")
// .then((data) => console.log(data))
// .catch((err) => console.error(err));

fs .promises.unlink(filePath)
.then(console.log("Deleted successfully"))
.catch((err) => console.error(err));