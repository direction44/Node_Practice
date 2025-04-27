const fs = require('fs');
const path = require('path');
const dirname=path.join(__dirname,"text_files")
fs.rmdir(dirname,{recursive:true},(err)=>{
    if(err)
    {
        console.log("Error in Deleting files"+err)
    }
    else{
        console.log("Directory Deleted"+dirname)
    }
})