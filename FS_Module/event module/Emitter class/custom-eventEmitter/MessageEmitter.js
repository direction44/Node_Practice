const EventsEmitter = require('events');
class MessageEmitter extends EventsEmitter{
    constructor() {
        super()
    }
    sendMessage(message)
    {
        this.emit("notify",message)
    }
}

module.exports=MessageEmitter