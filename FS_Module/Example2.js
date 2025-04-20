const fs = require('fs');
const path="./messages.txt"
fs.access(path,(err)=>{
    if(err){
        console.log("no file")
    }
    else{
        console.log("file exist")
    }
})
