const fs = require('fs');
function writeObject(path,favActor)
{
    try{
        const favActorStr=JSON.stringify(favActor)
        fs.writeFileSync(path,favActorStr)
        console.log("record saved")
    }
    catch(err)
    {
        console.log("error in writing JSON"+err)
    }
}

function readObject(path){
    try{
       const favActorStr= fs.readFileSync(path,"utf-8")
       const favActor=JSON.parse(favActorStr)
       console.log("file read successfullt")
       console.log(`name:${favActor.name},movie:${favActor.movie}`)
    }
    catch(err){
        console.log("Error in reading the file",err)
    }
}
let path="./text_files/actor.json"
let favActor={name:"HarshVardhan",movie:"Sanam teri kasam"}
writeObject(path,favActor)
readObject(path)