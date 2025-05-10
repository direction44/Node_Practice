const http = require('http');
const requestListener=(req,res)=>{
    console.log("New request arrived")
}
const server=http.createServer(requestListener)

server.listen(8000)
console.log("server started and listning at port number 8000")
