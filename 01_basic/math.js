const number = new Number(100)

// console.log(Math.abs(-4));
// console.log("rounded value " + Math.round(20.45));
// console.log(Math.floor(39.55));
// console.log(Math.ceil(39.55));


// random number function 

console.log(Math.random());  // return value between 0 and 1

// get random number between min and max value
const min = 10
const max = 20
console.log(Math.floor(Math.random() * ( max - min + 1)) + min);