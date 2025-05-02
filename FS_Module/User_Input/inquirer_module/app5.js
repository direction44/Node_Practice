import inquirer from "inquirer";
inquirer.prompt([{
    name:"popular Language",
    message:"According to Github,which language was most popular lang of 2022",
    type:"list",
    choices:["C++","Java Script","Java","GO","Node"],
    default:"Java Script"
}]).then((answer)=>{
    console.log(answer)
})