const EventEmitters = require('events');
const eventEmitter=new EventEmitters()

eventEmitter.once("NewUser",(User)=>{
    console.log("A New User registred",User.name)
})

eventEmitter.emit("NewUser",{name:"Disha",id:101})
eventEmitter.emit("NewUser",{name:"Aditi",id:102})
eventEmitter.emit("NewUser",{name:"Shourya",id:103})