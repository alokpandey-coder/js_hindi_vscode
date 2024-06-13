// Primitive Datatype --> String,Boolean,null,Number,undefinedd,Symbol,BigInt

//Non Primitive Datatype ---> Array,Object,Functions

// JS is a dynamically type language. this means that the data type of a variable is determined by the value that assigned to it.

const score =100;
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null

 let userEmail;   //same as below 
 let userEmail1 = undefined;

 // Symbol
 const id = Symbol('123')
 const anotherId  = Symbol('123')

 console.log(id === anotherId)

 const bigNumber = 123456987256987423658n

 console.log(bigNumber);

 //Non Primitive
// 1. Array
 const heros = ["shaktiman" ,"naagraj","doga"]
 
// 2. Object

let myObJ = {  
    name:"Alok Kumar Pandey",
    age:23,
    DOB:"07:02:03",
}

console.log(myObJ)

// 3. Function

const myFunction = function() {
    console.log("Hello World");
}

//How to find datatype -

console.log(typeof myFunction);
console.log(typeof myObJ);
console.log(typeof heros);
console.log(typeof bigNumber);
console.log(typeof id);


//Note: 

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function (Object Function)
       Object  =>  object

       */

       // this Is Data type Summary


       console.log(" this Is Data type Summary");