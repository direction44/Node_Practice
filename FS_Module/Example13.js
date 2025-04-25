const fs = require('fs');
const path="./text_files/messages.txt"
const msg="\nHello From Node js"
const date=new Date()
const today=date.toLocaleString()
const str=msg+"\n"+today
try{
    fs.appendFileSync(path,str)
    console.log("File Saved Successfully")
}
catch(err){
    console.log("error in appending the file")
}