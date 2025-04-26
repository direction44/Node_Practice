const fs = require('fs');
const path="./text_files/media/videos"
fs.mkdir(path,{recursive:true},(err)=>{
    if(err)
    {
        console.log("errror in making the directories"+err)
    }
    else{
        console.log("directories created successfully")
    }
})