console.log("Hello");

let MyDate = new Date()

console.log(MyDate);

console.log(MyDate.toString());

console.log(MyDate.toDateString()); // FOR Exact Date and Day

console.log(MyDate.toISOString());

console.log(MyDate.toJSON());

console.log(MyDate.toLocaleDateString);

console.log(MyDate.getTimezoneOffset);

console.log(MyDate.toLocaleString());

let myCreatedDate = new Date(2000,1,7)
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date("2000-2-7")
console.log(myCreatedDate1.toLocaleString());


//mm-dd-yy

let createdate2 = new Date("02-07-2000")
console.log(createdate2.toLocaleString());

//Time

let myTimeStamp = Date.now()

console.log(myTimeStamp); //time in ms 

console.log(createdate2.getTime()); //Time in ms at same date

console.log(Math.floor(Date.now()/1000)); // time in second Math.floor used to remove decimal 


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getDay());


console.log(`Hello guys today's Date is ${newDate.toLocaleString()} and the Day is ${newDate.getDay()}`);

console.log(newDate.toLocaleString('default',{weekday:"long"  }));