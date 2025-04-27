const fs = require('fs');
const path = require('path');
const dir="./"
console.log("current wroking directory is"+path.resolve(dir))

fs.readdir(dir,(err,files)=>{
    if(err){
        console.log("error in reaing directory content")
    }
    else{
        console.log(`total files in ${__dirname} are ${files.length}`)
        files.forEach((file)=>{
            console.log(file)
        })
    }
})