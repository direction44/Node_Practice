const EventEmitter = require('events');
const eventEmitter=new EventEmitter()

eventEmitter.on("newUser",()=>{
console.log(`user1 is registred`)
})
eventEmitter.on("newUser",()=>{
console.log(`user2 is registred`)
})
 
eventEmitter.emit("newUser")