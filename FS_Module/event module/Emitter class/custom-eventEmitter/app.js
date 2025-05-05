const MessageEmitter = require('./MessageEmitter');
const msgEmitter=new MessageEmitter()
msgEmitter.on("notify",(msg)=>{
    console.log(`Notification Recevied ${msg}`)
})

msgEmitter.sendMessage("Your next class is on monday")
msgEmitter.sendMessage("next class will be on creating web server")