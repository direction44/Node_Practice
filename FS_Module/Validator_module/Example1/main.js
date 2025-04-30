const validator = require('validator');
const email="dishashivhare44@gmail.com"
console.log(`is ${email} is valid email:`,validator.isEmail(email))
const email2="dishashivhare44gmail.com"
console.log(`is ${email2} is valid email:`,validator.isEmail(email2))
const name="disha"
console.log(`check ${name} is in lower case`,validator.isLowercase(name))
const name1="Disha"
console.log(`check ${name1} is in lower case`,validator.isLowercase(name1))
