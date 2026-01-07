// Write The function to get the extension of the fileName

// let filename = "index.css";
// let filename2 = "index.html";
// function getTheExtension(filename) {
//   for (let x in filename) {
//     if (filename[x] == ".") {
//       let extension = filename.slice(x);
//       return extension;
//     }
//   }
// }

// console.log(getTheExtension(filename));

const exeFile = (file) => file.slice(file.lastIndexOf("."));

console.log(exeFile("index.html"));
console.log(exeFile("index.css"));
console.log(exeFile("index.controller.js"));
