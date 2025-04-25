const fs = require('fs');
const path="./text_files/messages2.txt"
const msg="\nHello From Node js"
const date=new Date()
const today=date.toLocaleString()
const str=msg+"\n"+today
fs.appendFile(path,str,(err)=>{
if(err&&err.code=="ENOENT"){
    console.log("Wrong path")
}else if(err){
    console.log("Error in appending in file")
  
}
else{
    console.log("File saved successfully")
}
})