const fs = require("fs")
const path = require("path")

// const fileName = "test.txt"
const filePath = path.join(__dirname, "test.txt")

// const fileName = "test.txt"
// const writeFile = fs.writeFileSync(fileName, "This is file data", "utf-8")

// console.log(writeFile);

// const readFile = fs.readFileSync(filePath, "utf-8")

// console.log(readFile);

// fs.appendFileSync(filePath, "\nThis is updated data", "utf-8")

// console.log("Data appended");


const fileDelete = fs.unlinkSync(filePath)

console.log(fileDelete);




