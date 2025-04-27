const fspromises = require('fs/promises');
const path="./text_files/newFile.txt"
async function readingFromFile() {
    try{
       let result=await fspromises.readFile(path,"utf-8")
       console.log(result)
    }
    catch(err)
    {
        console.log("Error in reading from file"+err)
    }
}
readingFromFile()