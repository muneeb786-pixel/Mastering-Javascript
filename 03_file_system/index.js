const fs = require('fs')

// read file 

// fs.readFile('input.in','utf-8',(error,data)=>{
//     if(error){
//         console.log(`somthing went wrong in file ${error}`);
//     }else{
//         console.log(data)
//     }
// });

// write file 
// let data = "welcome to fs"
// fs.writeFile('input.in',data,'utf-8',(error)=>{
//     if(error){
//         console.log('write error',error);
//     }
// });

// append

// let append = " this is text to be append after text"
// fs.appendFile('input.in',append,'utf-8',(error)=>{
//     if (error) {
//         console.log('error',error);
//     }
// })


// delet file 
// fs.unlink('input.in',(error)=>{
//     if (error) {
//         console.log(error);
//     }
// })

// commmand line arguments

if (process.argv.length <=2) {
    console.log('no file mention');
    return ;
}

const filename =  process.argv[2];
console.log(filename);