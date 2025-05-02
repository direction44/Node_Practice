import inquirer from "inquirer";
inquirer.prompt([{name:"favMovie",message:"Please enter your fav movies?"}]).then((answer)=>{
    console.log(answer)
})