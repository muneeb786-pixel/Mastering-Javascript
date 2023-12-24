/* in this we will learn about let,const and var , we will user inverstigation 
way to learn things, we will suppose a real time project and on that basisc we learn new concepts,
let suppose we are builting an ecommerce store so you need yo take some information from user and save 
in variables, forget about database now
*/

const accountId = "90099321"
let email = "muneeb@gmail.com"
var password = "00998833" 
city="lahore"

// let us try to change accountId
// accountId = "343434343"

// print accountID
console.log(accountId);
// so we get an error that we can't change accountId becuse it is using const key word we can't change it,let try other

email="mn@gm.com"
password="33333333"
city="multan"

console.table([email,password,city,accountId])
/*

┌─────────┬─────────────┐
│ (index) │   Values    │
├─────────┼─────────────┤
│    0    │ 'mn@gm.com' │
│    1    │ '33333333'  │
│    2    │  'multan'   │
│    3    │ '90099321'  │
└─────────┴─────────────┘
this is our output
here you can see let and var can be change one more thing we define city we don't use let or const or var so we can do
this way but not preferable,
<<<<< important >>>>>>
never use var because it is define as global variable, always use let or const they are block and functional scope variable 
*/

