
//Explain data types

//String
let user_name:string = 'Sheikh Jibran Ahmed';
console.log(user_name)

//Number
let user_contact:number = 300170000;
console.log(user_contact)

//Boolean
let alreadyAreMember:boolean = true;
console.log(alreadyAreMember)

//Undefined
let inFutureDefineValue:undefined ;
console.log(inFutureDefineValue)

//null
let emptyVariable:null = null;
console.log(emptyVariable)

//Symbol
let uniqueValue:symbol = Symbol('description');
console.log(uniqueValue)

//Bigint
let largeNumber:bigint = 12345678901234567890n
let secondLargeNumber:bigint = 3241284147812841n
console.log(largeNumber * secondLargeNumber)



// Print all values of our variables

console.log('User name : '+ user_name +
 '\n' + 'Contact : ' + user_contact +
  '\n' + 'Already our member? ' + alreadyAreMember)