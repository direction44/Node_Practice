import inquirer from "inquirer";
inquirer.prompt([{
    name:"popular Language",
    message:"According to Github,which language was most popular lang of 2022",
    type:"rawlist",
    choices:["C++","Java Script","Java","GO","Node"]
}]).then((answer)=>{
    console.log(answer)
})