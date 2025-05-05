const EventEmitter = require('events');
function counter(sec){
    const eventEmitter=new EventEmitter()
    let currSec=0
    let id=setInterval(() => {
        currSec++
        eventEmitter.emit("update",currSec)
        if(currSec===sec)
        {
            eventEmitter.emit("end")
            clearInterval(id)
        }
        else if(currSec===sec-2)
        {
            eventEmitter.emit("end-soon")
        }

    }, 1000);
    return eventEmitter
}

let eventEmitter=counter(5)
eventEmitter.on("update",(sec)=>{
    console.log(`${sec} second passed`)
})
eventEmitter.on("end",()=>{
    console.log(`Time Over`)
})
eventEmitter.on("end-soon",()=>{
    console.log(`2 Second Remaining`)
})