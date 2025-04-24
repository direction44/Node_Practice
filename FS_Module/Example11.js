const fs = require('fs');
const path="./text_files/index.txt"
try{
    let text=fs.readFileSync(path)
    console.log(text)
    console.log(text.toString())
}
catch(err)
{
    console.log("error in file reading"+err)
}