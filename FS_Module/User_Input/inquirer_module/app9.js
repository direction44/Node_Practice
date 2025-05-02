import inquirer from "inquirer";
inquirer.prompt([{
    name:"PWD",
    message:"Enter the secret key?",
    type:"password"
}]).then((answer)=>{
    console.log(answer)
})