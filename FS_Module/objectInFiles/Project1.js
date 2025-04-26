const fs = require('fs');
function writeFile(path,items)
{
    let status=true
    try{
        const itemjson=JSON.stringify(items)
        fs.writeFileSync(path,itemjson)
        console.log("File Saved!")
    }
    catch(err)
    {
        console.log("Error in writing file"+err)
        status=false
    }
    finally{
        return status
    }
}

function readFile(path)
{
    try{
      let str=''
      const groceriesItems = fs.readFileSync(path,"utf-8")
      const groceries=JSON.parse(groceriesItems)
    //   console.log(groceries)
      let bill=0
      for(items of groceries)
      {
        str+=`\n${items.name},${items.qty},${items.price}`
        bill+=(items.price*items.qty)
      }
      console.log(str)
      console.log("Bill:",bill)
    }
    catch(err){
        console.log("Error in reading in file"+err)
    }
}

const path="./text_files/groceries.json"
let items=[{name:"bread",qty:4,price:20},{name:"milk",qty:2,price:35},{name:"butter",qty:3,price:250}]

let result=writeFile(path,items)
if(result){
    readFile(path)
}
