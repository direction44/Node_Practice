let args=process.argv
if(args.length<4)
{
    console.log("Please pass atleast 2 numbers")
    process.exit()
}
let sum=0
for(let i=2;i<args.length;i++){
    sum+=Number(args[i])
}
console.log("Sum if the numbers is :",sum)
console.log("Average of these numbers is",sum/(args.length-2))
