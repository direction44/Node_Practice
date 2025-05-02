import inquirer from "inquirer";
inquirer.prompt([{name:"favMovies",message:"what is your favorite movies?",default:"super 30"},{name:"favActor",message:"who is your favorite actor?",default:"sunny deol"}]).then((answer)=>{
    console.log(answer)
})