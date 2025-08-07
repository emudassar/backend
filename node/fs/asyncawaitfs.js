const fs = require("fs/promises");
const path = require("path");

const fileName = "asyncAwait.txt";
const filePath = path.join(__dirname);

// fs.promises
//   .readFile(filePath, "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// const readFolder = async () => {
//   try {
//     const res = await fs.readdir(filePath, "utf-8");
//     console.log(res);

//   } catch (error) {
//     console.error(error);
//   }
// };

// readFolder();

// const readFile = async () => {
//   try {
//     const data = await fs.readFile(fileName, "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// readFile();

const deleteFile = async () => {
  try {
    await fs.unlink(fileName);
    console.log("Deleted Successfully");
  } catch (error) {
    console.error(error);
  }
};

deleteFile();
