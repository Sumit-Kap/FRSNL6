// import Display from "./Display";
const fs = require("fs");
const path = require("path");
// console.log(__filename, __dirname);
// fs.mkdir(path.join(__dirname, "./test"), (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("directory is created");
// });

// fs.writeFile(
//   path.join(__dirname, "./test", "geeks_demo"),
//   "Hello geeks",
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("file got created");
//   }
// );

fs.readFile(
  path.join(__dirname, "./test", "geeks_demo"),
  "utf8",
  (err, data) => {
    if (err) {
      throw err;
    }
    console.log("Data in the file is - ", data);
  }
);
