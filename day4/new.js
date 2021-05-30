// IMPORT FS MODULE
// CREATE FILE AND STORE STING DATA
fs.writeFileSync("create_file.txt","hi ! im yagnik" );
// APPEND EXISTING FILE
fs.appendFileSync("create_file.txt","hi ! im yagnik boom" );
// READE FILE AND STORE DATA IN BUFFER
// PRINT BUFFER DATA
console.log(buff_data);
// CONVERT BUFFER BINARY DATA TO LOCAL STRING DATA AND STORE ORIGINAL VARIABLE
const org_data = buff_data.toLocaleString();
// PRINT ORIGINAL DATA
console.log(org_data);
// RENAME FILE 
fs.renameSync("renameFile.txt","create_file.txt");
