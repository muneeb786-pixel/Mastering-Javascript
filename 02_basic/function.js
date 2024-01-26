// this keyword access current attributes this not work in function 

const user ={
    name: 'muneeb',
    age: 23,
    greeting: function(){
        console.log(`Hello ${this.name}!`);
    } 
}

user.greeting()

const fun1 = function(){
    const username = "Muneeb ur rehman"
    console.log(this.username);
}

// fun1()  
// return undefined mean this not work inside function 

const thisFunction = function(){
    console.log(this);
}
// thisFunction()

// arrow function 
const add1 = (num1,num2)=>{
    return num1+num2;
}

console.log(add1(1,2));

// IIFE function
(()=>{
    console.log('this is IIFE function');
})()
