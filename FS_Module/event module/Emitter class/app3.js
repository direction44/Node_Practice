const EventEmitter = require('events');
const eventEmitter=new EventEmitter()
eventEmitter.on("newUser",(user)=>{
    console.log(`A new user registred by the name ${user.name} with the is ${user.id}`)
})

eventEmitter.emit("newUser",{name:"Disha",id:101})
eventEmitter.emit("newUser",{name:"Amit",id:102})
eventEmitter.emit("newUser",{name:"Nisha",id:103})