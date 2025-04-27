const  fsPromises= require('fs/promises');
const fs = require('fs');
const path="./text_files/messages.txt"
async function setPermission()
{
    try{
        await fsPromises.chmod(path,fs.constants.S_IRUSR)
        console.log("File set to read only")
    }
    catch(err)
    {
        console.log("Error in setting permission"+err)
    }
}

setPermission()