// load local module and 
var multiplication_Table = require("./day2.js")
// load core module and
var http = require("http");
const server = http.createServer(function(request,response)
 {
     response.end(multiplication_Table);
 }).listen(3000);
 console.log("server is running on localhost:port no 3000");
