const validator = require('validator');
const freedom="15-8-1997"
console.log(`is freedom ${freedom} date is valid ${validator.isDate(freedom)}`)
const freedom1="1997-8-15"
console.log(`is freedom ${freedom1} date is valid ${validator.isDate(freedom1)}`)
const independent="1997-08-15" //yyyy-mm-dd
console.log(`is freedom ${independent} date is valid ${validator.isDate(independent)}`)