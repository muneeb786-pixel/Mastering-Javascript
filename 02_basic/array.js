const array = [1,2,3,4,"muneeb",true]

// console.log(array[5]);

console.log(array.includes(3))

// push and pop
array.push(10)
array.push(20)
array.push(30)

array.pop()

// shift and unshift plaace and remove from start of array
array.unshift(8)

array.unshift(3)

array.shift()


// slice and splice slice do deep copy while splice so shallow copy it effect orignal array 

console.log(array.splice(1,3));

array.splice(1,3)

console.log(array)
