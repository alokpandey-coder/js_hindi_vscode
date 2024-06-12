let score = "33abcd"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

//"33" ==> 33
// "33abc"  ==> NaN Not A Number
//  true ==> 1 and false ==>0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let age =45
let stringmaker = String(age)
console.log(stringmaker);
console.log(typeof stringmaker);


              //OPERATIONS

              let str1 = "hello "
              let str2 = "alok"
              
              console.log(str1 + str2)
              
              //Problem_Areas
              
              console.log(1 + "2")
              console.log("1" + 2)
              console.log("1" + 2 + 2)
              console.log(1 + 2 + "2") //imp - if string is first than all other also treated in string if number than all other treated like numbers and operations are occured as usual

              

              console.log(true);
              console.log(+true);
              console.log(-true);

              console.log(+false)
              console.log(-false);


              let gameCounter = 100;
             //gameCounter++;
             ++gameCounter
             console.log(gameCounter);