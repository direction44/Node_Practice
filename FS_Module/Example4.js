const fs = require('fs');
const path="./text_files/messages.txt"
let msg="Welcome To Node js"
let today=new Date()
let date=today.toLocaleString()
str=msg+"\n"+date
fs.writeFileSync(path,str)