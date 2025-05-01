const chalk = require('chalk');
let args=process.argv
if(args.length<4)
{
    console.log(chalk.blue("Please pass atleast 2 nos"))
    process.exit()
}
try{
    let sum=0
    for(let i=2;i<args.length;i++)
    {
        if(isNaN(args[i]))
        {
            throw new Error("Please Pass integer Only")
            
        }
        sum+=Number(args[i])
    }
    let avg=sum/(args.length-2)
    console.log(chalk.green(`Sum is :${sum}`))
    console.log(chalk.green(`Average is :${avg.toFixed(2)}`))
}
catch(err)
{
    console.log(chalk.red(err))
}