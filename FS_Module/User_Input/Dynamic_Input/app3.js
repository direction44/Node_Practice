const setup = require('prompt-sync');
let prompt=setup({sigint:true})
let fno=Number(prompt("Please Enter First Number?"))
let sno=Number(prompt("Please Enter Second Number?"))
console.log(`Sum is:${fno+sno}`)