const fs = require('fs/promises');
const path="./text_files/messages1.txt"
async function checkFile(){
    try{

        await fs.access(path)
        console.log("File exist")
    }
    catch(err)
    {
        console.log("File doesnot not exist "+err)
    }
}
checkFile()