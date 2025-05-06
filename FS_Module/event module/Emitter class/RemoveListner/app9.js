const EventEmitter = require('events');
const eventEmitter=new EventEmitter()
let displayUser=()=>{
 console.log("A New User Registered")   
}
eventEmitter.on("NewUser",displayUser)

eventEmitter.emit("NewUser")
eventEmitter.removeAllListeners("NewUser")
eventEmitter.emit("NewUser")
