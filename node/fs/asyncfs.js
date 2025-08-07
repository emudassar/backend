const fs = require("fs");
const path = require("path");

const fileName = "asyncFs.txt";
const filePath = path.join(__dirname, fileName);

// fs.writeFile(filePath, "Test data", "utf-8", (err) => {
//   if (err) console.log(err);
//   else console.log("File has been saved");
// });

// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

// fs.appendFile(filePath, "\nFile updated", "utf-8", (err) => {
//   if (err) console.log(err);
//   else console.log("updated");
// });

fs.unlink(filePath, (err) => {
  if (err) console.error(err);
  else console.log("File has been deleted");
});
