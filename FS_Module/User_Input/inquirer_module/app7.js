import inquirer from "inquirer";
inquirer.prompt([{
    name:"gender",
    message:"What is your gender?",
    type:"expand",
    choices:[{key:"m",value:"Male"},{key:"f",value:"Female"},{key:"O",value:"Other"}]
}]).then((answer)=>{
    console.log(answer)
})