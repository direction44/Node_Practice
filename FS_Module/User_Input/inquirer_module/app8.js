import inquirer from "inquirer";
inquirer.prompt([{
    name:"Known",
    message:"What all Programming language you know?",
    type:"checkbox",
    choices:["C++","Java Script","Java","GO","Node","Python","PHP"]
}]).then((answer)=>{
    console.log(answer)
})