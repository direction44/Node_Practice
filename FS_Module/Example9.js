const fs = require('fs');
const path="./text_files/index.txt"
const msg="Welcome to node.js"
const date=new Date()
const today=date.toLocaleString()
const str=msg+"\n"+today
fs.writeFile(path,str,{flag:"wx"},(err)=>{
    if(err&&err.code==="EEXIST")
    {
        console.log("File already present")
    }
    else{
        console.log("File saved successfully")
    }
})