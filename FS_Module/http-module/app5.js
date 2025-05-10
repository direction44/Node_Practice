const http = require('http');
const requestListener=(req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("Good morning")
    console.log("New request arrived")
}
const server=http.createServer(requestListener)

server.listen(8000)
console.log("server started and listning at port number 8000")
