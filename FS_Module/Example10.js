const fs = require('fs');
const path="./text_fils/index.txt"
try{
    let text=fs.readFileSync(path,"utf-8")
    console.log(text)
}
catch(err)
{
    console.log("error in file reading"+err)
}