const fs = require('fs');
function addHeader(path,headers)
{
    let status=true
    let str=""
    headers.forEach(element => {
        str+=element+","
    });
    str=str.substring(0,str.length-1)
    try{

        fs.writeFileSync(path,str)
    }
    catch(err){
        console.log("Error in adding headers"+err)
        status=false
    }
    finally{
        return status
    }
}

function addItems(path,items)
{
    let status=true
    try{
        for(let item of items){
            const str=`\n${item.name},${item.qty},${item.price}`
            fs.appendFileSync(path,str)
        }
    }
    catch(err){
        console.log("Error in appending items"+err)
        status=false
    }
    finally{
        return status
    }
}

function showItems(path)
{
    try{
        let text=fs.readFileSync(path,"utf-8")
        console.log(text)
    }
    catch(err)
    {
        console.log("Error in reading items")

    }
}

let path="./text_files/grocieries.csv"
let headers=["name","qty","price"]
let result=addHeader(path,headers)
if(result)
{
    console.log("File Created")
    let items=[{name:"bread",qty:4,price:20},{name:"milk",qty:2,price:35},{name:"butter",qty:3,price:250}]
    let result=addItems(path,items)
    if(result)
    {
        console.log("Items Appended")
        showItems(path)
    }

}