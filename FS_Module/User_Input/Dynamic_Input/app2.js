const setup = require('prompt-sync');
let prompt=setup()
let fno=Number(prompt("Please Enter First Number?"))
let sno=Number(prompt("Please Enter Second Number?"))
console.log(`Sum is:${fno+sno}`)