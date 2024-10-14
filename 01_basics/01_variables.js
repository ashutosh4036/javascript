const account1 = 14453
let accountEmail = "ashutosh@gmail.com"
var accountPassword = "12345"
accountCity = "Renukoot"

let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(account1);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([account1,accountEmail,accountPassword,accountCity,accountState])