const http = require('http');
const requestListener=(req,res)=>{
    res.setHeader("Content-Type","text/plain")
    res.statusCode=200
    res.end("Node Rocks!")
    console.log("New request arrived")
}
const server=http.createServer(requestListener)

server.listen(8000)
console.log("server started and listning at port number 8000")
