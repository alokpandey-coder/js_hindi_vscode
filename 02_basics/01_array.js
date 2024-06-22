const myArr = [1,2,3,4,5,6]

const myArr2 =["shaktiman","naagraj","valmi",2,6,7,null]

console.log(myArr2[6])

//console.log(myArr.push(19));

//console.log(myArr.push(7,8,9,10));

//console.log(myArr);

myArr.pop()

//console.log(myArr);

myArr.unshift(79); // add 79 as a 0th element in the Array

//console.log(myArr);

myArr.shift()
//console.log(myArr); //Remove 0th element of Array

//console.log(myArr.includes(79));
//console.log(myArr.indexOf(19));
//console.log(myArr.join());

// ----------------- Slice and Splice ------------------------

console.log("A" ,myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B" ,myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);

console.log("C" ,myArr);
