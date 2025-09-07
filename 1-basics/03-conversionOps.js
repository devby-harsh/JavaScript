let score = "harsh"

console.log(typeof score);
console.log(typeof (score));  

let valueInNumber = Number(score) // conversion from string to number
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "18" => 18
// "harsh" => NaN
// true => 1 , false => 0
// null => 0
// undefined => NaN

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn) // conversion from number to boolean
console.log(booleanIsLoggedIn); 

// "" => false
// "harsh" => true
// 0 => false , 1 => true

let someNumber = 123

let stringNumber = String(someNumber) // conversion from number to string
console.log(stringNumber);
console.log(typeof stringNumber);

// ***************OPERATIONS*****************//

let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2%2)
// console.log(2/2)

let str1= "hello"
let str2= "harsh"

let str3= str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 2  + 2);    // if no string (" ") then all are simply added (= 5)
console.log("1" + 2  + 2);  // if string ( or " " is first) then next everyone considered as string (= 122)
console.log(1 + 2  + "2");  // if string ( or " " is last) then first ones are converted or added (= 32)

// console.log(3 + 5 * 4 / 7); // never do such complicated work always be clean and specify what you want first using brackets.

console.log(true);
console.log(+true);
console.log(true+);  // this will give you error for whole code (STAT AWAY) 
console.log(+"");

let num1, num2, num3 

num1 = num2 = num3 = 2 + 2 

let gameCounter = 100 
gameCounter++;        // here we will get same output ( if  ++ used prefix or postfix ) but in backend there roles are diferent
console.log(gameCounter);

