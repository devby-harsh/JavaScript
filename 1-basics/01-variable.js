const accountId = 123456;
let accountEmail= "harsh01@gmail.com"
var accountPassword = "12345";
accountCity = "Mumbai"
let accountState;

// accountId = 2 not allowed

accountEmail = "account12@ac.com"
accountPassword = "001122"
accountCity = "Delhi"

console.log(accountId);
console.table([accountId,accountEmail, accountPassword, accountCity, accountState]);

/*
prefer not to use var
because of issue in block scope and function scope
*/