import inquirer from "inquirer";
inquirer.prompt([{name:"favMovies",message:"what is your favorite movies?",default:"sanam teri kasam"}]).then((answer)=>{
    console.log(answer)
})
