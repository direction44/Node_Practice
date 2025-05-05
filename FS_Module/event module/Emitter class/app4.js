const EventEmitter = require('events');
const eventEmitter=new EventEmitter()
eventEmitter.on("secondPassed",(sec)=>{
    console.log(`${sec} second passed`)
})
let count=0
setInterval(()=>{
    count++
    eventEmitter.emit("secondPassed",count)
},1000)