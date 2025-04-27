const fspromises = require('fs/promises');
const path="./text_files/newFile.txt"
async function writeInFile(message)
{
    try{
               await fspromises.writeFile(path,message)
               console.log("Writing in File successfully")
    }
    catch(err)
    {
        console.log("Error in Writing")
    }
}

const msg="Welcome to Node JS"
let date=new Date()
let str=msg+"\n"+date.toLocaleString()
writeInFile(str)
console.log("DONE!")