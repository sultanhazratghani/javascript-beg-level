//when doing comparision answer is always in boolean
console.log(2 > 1);
console.log(2 >=1);
console.log(2 == 1);
console.log(2 <= 1);
console.log(2 < 1);
console.log(2!=1);


// problem comes when you dont compare same data
//type.

console.log("2" > 1); // true. javascript automatically
// converted string to number, in such type of 
// comparision your comparision dont give predictable
// result

// typescript will not even allow you 
// typescript only gives you strict rule 
//-----------------------------------
console.log(null > 0);// false
console.log(null == 0);// false
console.log(null >= 0);// true
/* The reason is that an wquality chech == and
comparision < > >= <= work differently.
comparisons convert null to a number, treating it
as 0. That's why (3) null >=0 is true and (1) null >=0 is false */


console.log(undefined ==0);
console.log(undefined <0);
console.log(undefined > 0);


// strict check (===) not only check values but also 
// check the variables\
console.log("2"===1);

// data types summary


 

