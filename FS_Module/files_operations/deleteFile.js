const fs = require('fs');
const path="./text_files/sandesh.txt"
fs.unlink(path,(err)=>{
    if(err)
    {
        console.log("Error in deleting the file"+err)
    }
    else{
        console.log("file deleted successfully")
    }
})