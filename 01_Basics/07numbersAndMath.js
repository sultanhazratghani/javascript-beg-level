const score =300;
const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1)); //ecommerce apps

let otherNumber = 23.32322;

console.log(otherNumber.toPrecision(3));
// should be careful about precision 

otherNumber = 123.869;
console.log(otherNumber.toPrecision(2));


const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

//----------------Maths===========

/* Maths library comes with javscript by 
 default.*/

 console.log(Math)
 console.log(Math.abs(-4)); // absolute value, (-ve values becomes positive)
 console.log(Math.round(4.5)); //
 console.log(Math.ceil(4.1));
 console.log(Math.floor(4.9));
 console.log(Math.sqrt(25));
 console.log(Math.min(4,2,5,2,1,0));
 console.log(Math.max(4,6,7,3,2,9));

 



// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);