const http = require('http');
const server=http.createServer((req,res)=>{
    console.log("New request arrived")
})

server.listen(8000)
console.log("server started and listning at port number 8000")
