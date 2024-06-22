let marvel_Heros = ["Ironmen","Hulk","spiderman","Thor"]

let dc_Heros = ["Supermen","Flash","Batman","Wonderwomen"]


//marvel_Heros.push(dc_Heros);
//console.log(marvel_Heros);

const allHeros = marvel_Heros.concat(dc_Heros);

console.log(allHeros);

const new_Heros = [...marvel_Heros, ...dc_Heros]

console.log(new_Heros);

const arr_another =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_arr_another = arr_another.flat(Infinity)

console.log(real_arr_another);

console.log(Array.isArray("ALOK")); //check whether this is Array or Not

console.log(Array.from("ALOK"));  //create Array

console.log(Array.from({name:"Hitesh"})); // Intresting - where we have to define which is to make array key or pair

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

