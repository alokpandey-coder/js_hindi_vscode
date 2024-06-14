const score =400;
console.log(score);

const balance = new Number(4789);

console.log(balance);
console.log(balance.toString());

console.log(balance.toFixed(2));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3))

const hund = 10000000000000

console.log(hund.toLocaleString()); // FOR US- NUMBER SYSTEM

console.log(hund.toLocaleString('en-IN')); // fOR iNDIAN NUMBER SYSTEM

// ------------------------------------ MATHS-----------------------------------------------------

console.log(Math.abs(-45687)); // Get Absolute Values

console.log(Math.round(4.6)) //Rond-off Values

console.log(Math.ceil(4.2)); //Top Values

console.log(Math.floor(4.9)); // Lowest Value

console.log(Math.min(4,3,6,8)); // Minimum Value

console.log(Math.max(4,3,6,8,9,11)); // Maximum Value

console.log(Math.random()); //Random Value

console.log((Math.random()*10)+1); //Random Value between 0-10

console.log(Math.floor(Math.random()*10)+1); //Get exact value between 0-10

// Ex- Values between min-max

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min +1))+min);







