const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

//marvelHeros.push(dcHeros); // push on existing array
//console.log(marvelHeros);// 
//console.log(marvelHeros[3][1]);// accessing values within array

 // marvelHeros.concat(dcHeros); in this method you can not hold the new array
// const allHeros = marvelHeros.concat(dcHeros); // concats return a new array
 //console.log(allHeros);


 // second way using spread operator glass on floor spread

 const allNewHeros = [...marvelHeros, ...dcHeros];
 console.log(allNewHeros);

 
 const unityNewHeros = [...marvelHeros, ...dcHeros, ..."AquaMan"];

 console.log(unityNewHeros);
 const newunityNewHeros = [...marvelHeros, ...dcHeros,"AquaMan"];
console.log(newunityNewHeros);

// const anotherArray = [1, 2, 4 [4, 3, 6 ], 7 [6,7, [4, 5, 4 [3, 5, 35 ]]]];
// const realAnotherArray = anotherArray.flat(infinity());
// console.log(realAnotherArray);

// data scrapping

console.log(Array.isArray("sultan"))
console.log(Array.from("sultan"))
console.log(Array.from({name:"sultan"})) //interesting batana parhega


let score1 = 100 
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));