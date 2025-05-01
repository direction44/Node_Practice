let args=process.argv
if(args.length<3)
{
    console.log("Good evening guest")
    process.exit()
}
for(let i=2;i<args.length;i++)
{
    console.log("Good Morning "+args[i])
}