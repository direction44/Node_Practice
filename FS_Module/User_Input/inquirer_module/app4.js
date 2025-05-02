import inquirer from "inquirer";
inquirer.prompt([{
    name:"popular language",
    message:"According to Github,which language was most popular lang of 2022",
    type:"list",
    choices:["C++","Java Script","Java","GO","Node"]

}]).then((answer)=>{
    console.log(answer)
})