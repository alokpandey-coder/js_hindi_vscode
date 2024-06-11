const account_Id = 144578
let account_Email = "8577923811lion@gmail.com"
var account_Password = "987456825"
let account_City = "Ballia"
let account_State;

// account_Id =2 ==> we cant change if we defined as const keyword



account_Email = "alokpandey07@gmail.com"
account_Password = "56897412"
account_City = "Lucknow"


console.log(account_Id)

/*
    Prefer not to use var - because of issue in block scope and functional scope.
*/



console.table([account_Id ,account_Email,account_City,account_Password,account_State ])