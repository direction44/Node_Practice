const fsPromises = require('fs/promises');
const fs = require('fs');
const path="./text_files/messages.txt"
async function setPermissions(){
    try{
        await fsPromises.access(path,fs.constants.F_OK|fs.constants.W_OK)
        console.log("file is present with writing permission")
        await fsPromises.chmod(path,fs.constants.S_IRUSR)
        console.log("file is set read only")
        await fsPromises.access(path,fs.constants.W_OK)
        console.log("file is present with writing permission")
    }
    catch(err)
    {
        switch(err.code)
        {
            case "ENOENT":
                console.log("File is not present")
                break
            case "EPERM":
                console.log("Writing permission denied")
                break
            default:
                console.log("Some exception"+err)
        }
    }
}

setPermissions()