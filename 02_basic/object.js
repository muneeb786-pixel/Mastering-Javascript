// singelton
// Object.create()


// object literals
// pass symbol as key
const mySym = Symbol('key1')

const myObj = {
    name: "Muneeb",
    "full name": "muneeb ur rehman",
    [mySym] : 'my symbol key',
    age:22,
    isLogged: true,
    lastLogin : ['monday','tuesday','wednesday'],
    email: 'muneeb@gmail.com'
}

// accessn objects property

console.log(myObj.age)
console.log(myObj['email'])
console.log(myObj['full name'])
console.log(myObj[mySym]);

// modify elements in object
 myObj.email= "munib@gmail.com"
 myObj.age=44

//  passing function 

myObj.greeting= function(){
    console.log(`Hello user ${this.name}`)
}
console.log(myObj.greeting());


