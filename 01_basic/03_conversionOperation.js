// here we will study how to do type casting and will see strange behavior of it 

let score  = 33

// console.log(typeof score);  // output=>number
// another way to check type is

// console.log(typeof(score));

// now lets see how can we do type casting 

score= "33"
let valueInNumber = Number(score)
// console.table([valueInNumber,typeof valueInNumber]);
/*
┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│    0    │    33    │
│    1    │ 'number' │
*/

// you should not use this blindly, let us see with someother examples 
// now we have some string value in score 
score = "33sdf"
valueInNumber = Number(score)
// console.table([valueInNumber,typeof valueInNumber])
/*
┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│    0    │   NaN    │
│    1    │ 'number' │
└─────────┴──────────┘
you can see we have a type of number but the value is not converted so this is some strange behavior and you need to mange this
*/

// lets talk about sting conversion 

score = 343
let valueInString = String(score);
// console.table([valueInString,typeof valueInString])
/*
now it is converted 
┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│    0    │  '343'   │
│    1    │ 'string' │
└─────────┴──────────┘
what if we add some another value not a number ? lets see
*/

score = undefined
valueInString = String(score);
// console.table([valueInString,typeof valueInString])

/*
see it just treat it as a string, so have to be carefull
┌─────────┬─────────────┐
│ (index) │   Values    │
├─────────┼─────────────┤
│    0    │ 'undefined' │
│    1    │  'string'   │

*/

score = "true"
let valueInBoolean = Boolean(score)
// console.table([valueInBoolean,typeof valueInBoolean]);
/*
┌─────────┬───────────┐
│ (index) │  Values   │
├─────────┼───────────┤
│    0    │   true    │
│    1    │ 'boolean' │
└─────────┴───────────┘
*/

score = 1
valueInBoolean = Boolean(score)
// console.table([valueInBoolean,typeof valueInBoolean]);

/*
┌─────────┬───────────┐
│ (index) │  Values   │
├─────────┼───────────┤
│    0    │   true    │
│    1    │ 'boolean' │
└─────────┴───────────┘
if score is 0 it will be false
let have some big numbers
*/

score = 33
valueInBoolean = Boolean(score)
// console.table([valueInBoolean,typeof valueInBoolean]);

/*
┌─────────┬───────────┐
│ (index) │  Values   │
├─────────┼───────────┤
│    0    │   true    │
│    1    │ 'boolean' │
└─────────┴───────────┘
still true
let try with string 
*/
 
score = ""
valueInBoolean = Boolean(score)
// console.table([valueInBoolean,typeof valueInBoolean]);

/*

┌─────────┬───────────┐
│ (index) │  Values   │
├─────────┼───────────┤
│    0    │   false   │
│    1    │ 'boolean' │
└─────────┴───────────┘
see now it is false
if we pass some string "fsdfsd" it will be true, you can play around
*/

 
score = undefined
valueInBoolean = Boolean(score)
console.table([valueInBoolean,typeof valueInBoolean]);

/*
┌─────────┬───────────┐
│ (index) │  Values   │
├─────────┼───────────┤
│    0    │   false   │
│    1    │ 'boolean' │
└─────────┴───────────┘
same for null
*/