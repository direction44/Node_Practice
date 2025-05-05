const EventEmitter = require('events');
const eventEmitter=new EventEmitter()

eventEmitter.on("login",()=>{
    console.log("User login")
})

eventEmitter.on("logout",()=>{
    console.log("user logout")
})

eventEmitter.emit("login")
eventEmitter.emit("logout")