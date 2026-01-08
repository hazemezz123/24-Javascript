const exeFile = (file: string) => file.slice(file.lastIndexOf("."));

console.log(exeFile("index.html")); // .html
console.log(exeFile("app.js")); // .js
console.log(exeFile("style.css")); // .css
