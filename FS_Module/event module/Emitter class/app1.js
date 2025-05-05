const EventEmitter = require('events');
const eventEmitter=new EventEmitter()
eventEmitter.addListener("newUser",(name)=>{
    console.log(`New user enter by the name ${name}`)
})

eventEmitter.emit("newUser","Disha")
eventEmitter.emit("newUser","Priya")
eventEmitter.emit("newUser","Namita")