const fs = require('fs');
const path="./text_files/messages.txt"
const msg="Welcome to node js"
const date=new Date()
const today=date.toLocaleString()
const str=msg+"\n"+today
fs.writeFile(path,str,(err)=>{
    if(err&&err.code=="ENOENT"){
        console.log("file cannot be created or written")
    }
    else{
        console.log("File Saved Successfully")
    }
})