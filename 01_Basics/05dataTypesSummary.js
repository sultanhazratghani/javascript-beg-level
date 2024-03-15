// prmitive 

// 7 types: string, number, boolean, null, undefined, Symbol (to make any value unique)
//BigInt( scientific big values)

// const score = 100;
// const scoreValue = 100.3;
// const isLoggedIn = false;
const outsideTemp = null;
// let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

 const bigNumber = 799878979n //(n converts into bigInt)


// call by value, call by reference

//non primitive (referance types)
//Arrays, Objects, Functions

const hereos = ['hazrat umer', 'khalid bin waleed', 'hazrat abubakr'];
let myObj={
    name: "sultan",
    age: 22,

}

//function(){}

// if want to store function in variable
const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber) // bigInt
console.log(typeof outsideTemp) //object
console.log(typeof myFunction);// object function
console.log(typeof id); // symbol
// based on how data is stored and how data is 
//accessed, two types are categorized
