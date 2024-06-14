console.log("Hello");

// 1. Primitive DataType (Use Stack - here it gets a copy of variable which are decleared , any changes occured in copy, not in original values).

let myYoutube = "Hitesh"
let another = myYoutube

another = "chai par code"

console.log(myYoutube);

console.log(another);

// 2. Non Primitive DataType (Use Heap - get reference from Original Values , any changes directly occured in original values)

let UserOne ={
    email: "user@gmail.com",
    upi:"user@ybl"
}

let UserTwo = UserOne

UserTwo.email = "hitesh@google.com"

console.log(UserOne.email);

console.log(UserTwo.email);