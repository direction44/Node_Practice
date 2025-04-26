const fs = require('fs');
const oldPath="./text_files/messages.txt"
const newPath="./text_files/sandesh.txt"
fs.rename(oldPath,newPath,(err)=>{
    if(err)
    {
        console.log("Error in renaming the file"+err)
    }
    else{
        console.log("renaming file successfully")
    }
})