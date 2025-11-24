const fs = require('fs')

console.log("Start");

fs.writeFile("user-info.txt", "Mudassar Khan\n", (err) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Task Done");
    
  }
})

console.log("end");

