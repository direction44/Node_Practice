const fs = require('fs/promises');
const path="./text_files/messages5.txt"
let pr=fs.access(path)
pr.then(()=>{
console.log("File is available")
}).catch((err)=>{
console.log("not able to find file"+err)
})