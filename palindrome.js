const fs = require('fs')

//check if argument have file name;
if(process.argv.length<=2){
	console.log('input file is not specify')
	return;
}

// get file name
const fileName= process.argv[2];

// read file 

fs.readFile(fileName,'utf-8',(error,data)=>{
    if(error){
        console.log('File read error',error);
    }
    console.log(data);
    console.log(isPalindrome(data.toLowerCase()))
})

//function to check palindrome
function isPalindrome(string){
	// check if string is empty then return true
	
	
    for (let i = 0; i < string.length/2; i++) {
        //elemnet from start
		const first = string[i];
        //element from end 
		const last = string[(string.length-i)-1];
        if(first!==last){
            return false
        }
        return true;
    }
}
