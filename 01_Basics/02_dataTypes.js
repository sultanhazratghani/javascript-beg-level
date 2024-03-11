/*
difference between old and new javascript.

"use strict" all code will be treated as newer javascript version.



alert("hello");
alert(5+8);// it will show an error, because programmers teach in browsers
node have different syntax to run alert, we are using nodejs, not browser
----------------------------

in javascript ; semicolon can be avoided.

console.log(5+6); console.log("sultan") // error, code should be readable
rather try like this. 
console.log(5+6);
console.log("sultan");

// code readability should be high 
--------------------------------------------------------------------

documentation recommended mdn
original documentation tc39.ec.


ecma script. 

javscript in starting had their own standards and browsers. then all javscript 
programmers sat and define one ecma script organization which will write 
javascript standards, 
2+"2"=22; // memes why is that so 
---------------------------------


Data types:
not much data types 
let name = "sultan" // string
let age = 18; // number
let isLoggedIn = false; // boolean    big  int is also used to store large numbers

// number => 2 to power 53
// bigint
// string ==> ""
// null => standalone value. let state = "null"; in temprature, suppose server has 
problem it cannot send you temprature, in that case if it send you 0 than
thats 0 is also a temprature, so it will send you null.
// undefined =>  when value not defined; let state;
// symbol => use for uniqueness use in react
----------------primitive data types fininshed------------------
-------------------------------------------------------------------------

how to check types of 
1. console.log(typeof "sultan");
2.console.log(typeof age);

console.log(type of undefined); // undefined, undefined id type in itself
console.log(typeof null); // object, null is an object.

// object to study in upcoming lectures notes


to read ecma scrip specifications */

