const http = require('http');
const server=http.createServer()

server.on("connection",(socket)=>{
    console.log("A new client arrived")
})
server.listen(8000)
console.log("server started and listning at port number 8000")
