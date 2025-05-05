const EventEmitter = require('events');
const event=new EventEmitter()
event.on("newUser",()=>{
    console.log("Hello User")
})

event.emit("newUser")
event.emit("newUser")
event.emit("newUser")