const fs = require('fs');
const path="./text_files/messages1.txt"
let msg="Welcome To Node js"
let today=new Date()
let date=today.toLocaleString()
str=msg+"\n"+date
fs.writeFile(path,str,(err)=>{
    if(err)
    {
        console.log("file is not written")
    }
    else{
        console.log("File is writen")
    }
})