const fs = require('fs');
const path="./text_files/index.txt"
fs.readFile(path,"utf-8",(err,text)=>{
    if(err&&err.code==="ENOENT"){
        console.log("file not present")
    }
    else if(err)
    {
        console.log("error in reading in file"+err)
    }
    else{
        console.log(text)
    }
})