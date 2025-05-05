const EventEmitter = require('events');
const eventEmitter=new EventEmitter()
eventEmitter.on("newUser",(name,id)=>{
    console.log(`A new user registred by the name ${name} with the is ${id}`)
})

eventEmitter.emit("newUser","Disha",101)
eventEmitter.emit("newUser","Amit",102)
eventEmitter.emit("newUser","Nisha",103)