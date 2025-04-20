const fs=require("fs")
path="./messages.txt"
if(fs.existsSync(path)){
    console.log("Yes")
}else{
    console.log("No")
}