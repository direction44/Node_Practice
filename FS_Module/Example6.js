const fs=require("fs")
const path="./text_files/messages.txt"
const msg="Welcome to NodeJS"
const date=new Date()
const today=date.toLocaleString()
const str=msg+"\n"+today
try{
    fs.writeFileSync(path,str)
}
catch(err)
{
    console.log("Not able to write in files",err.message)
}