// Primitive

// 7 types : string, number, boolean, null(empty), undefined, symbol, BigInt

const score = 100 
const scoreValue = 100.3

const isloggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const BigNumber = 346478374893749n


// Reference (non-primitive)

// array, objects,  functions

const heros = ["ironman", "thor", "spiderman"]; // This is Array

let myobj= {
   name: "harsh",
   age: "18",
}                                              // Objects are in " {} " always, any datatypes can be used


const myfunction = function(){
    console.log("Hello  Harsh");
    
}

// console.log(typeof BigNumber);
// console.log(typeof outsidetemp);

console.table(typeof myfunction, heros ); // All non primitive types have same ( typeof ) "Function" but for function type its particularlly called "object function"

     