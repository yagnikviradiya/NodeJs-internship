
// CRUD OPERATION :----------
// import fs module
const fs = require("fs");
// create directory
 fs.mkdirSync("CRUD");
//  creat file
 fs.writeFileSync("new.txt","hi im yagnik");
//  update file
 fs.appendFileSync("new.txt","booommmm");
//  read data from file 
 const data = fs.readFileSync("new.txt","utf-8");
 console.log(data);
//  rename the file name
// // fs.renameSync("new.txt","rename.txt");
//  delete file
 fs.unlinkSync("rename.txt");
// delete directory
 fs.rmdirSync("CRUD");





