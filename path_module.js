const { log } = require("console")
const path = require("path")
const os = require("os")

console.log(__dirname);
console.log(__filename);

const filepath = path.join("folder", "students", "data.txt")

console.log(filepath);

console.log("CPU Architecture:", os.arch());
