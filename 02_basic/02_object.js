const myObj = new Object()

const tinderUser = {}
tinderUser.id= 1232
tinderUser.email = 'muneeb@gmail.com'
tinderUser.isLoggedIn = true


// object insie object
const anotherUser = {
    fullname:{
        first : 'muneeb',
        middle : 'ur',
        rehman: 'rehman'
    }
}

const obj1 = {
    0:334,
    1:'usr1'
}

const obj2 = {
    2:334,
    3:'usr1'
}

// conmbine objects
const obj3 = {...obj1 , ...obj2}
console.log(obj3);


// get objects keys
console.log(Object.keys(tinderUser));

// get object value
console.log(Object.values(tinderUser));
// check if key exist 

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

console.log(anotherUser.fullname?.first);