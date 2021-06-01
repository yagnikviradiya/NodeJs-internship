// CRUD OPERATION IN ASYNCHRONOUS WAY
const fs = require("fs");
// CREATE
fs.writeFile("sync.txt","this is a sync way to write text file",(err) => {
    console.log("file is created");
    console.log(err);
});
//READ
 fs.readFile("./sync.txt","utf-8",(err,data)=> {
    console.log(data);
    console.log(err);  
});
// UPDATE
fs.appendFile("./sync.txt"," its batter then sync way ",(error)=> {
    console.log("file is appended");
    console.log(error);  
});
// DELETE FILE
fs.unlink("./sync.txt",(err) => {
    console.log("file is deleted");
    console.log(err); 
});
// CREATE DIRECTORY
fs.mkdir("NEW",(ERR)=> {
    console.log("directory is created");
    console.log(ERR); 
});
// REMOVE DIRECTORY
fs.rmdir("NEW",(ERR)=> {
    console.log("directory is deleted");
    console.log(ERR); 
});