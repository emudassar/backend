import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileCreater = () => {
  rl.question("Enter the file name: ", (fileName) => {
    rl.question("Enter the file contetn: ", (content) => {
      fs.writeFile(fileName, content, (err) => {
        if (err) throw err;
        console.log("File created successfully!");
        rl.close();
      });
    });
  });
};

fileCreater();
