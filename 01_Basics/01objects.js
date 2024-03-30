//singelton

// object literals
//Object.create


const mySym = Symbol("key1");


//object literals
const jsUser ={
    name: "sultan",
    "fullName": "sultan ghani",
    [mySym]: "myKey1",
    age: 18,
    lecation: "karachi",
    email: "sultan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
    

}


// two ways to acess 
console.log(jsUser.name); 
console.log(jsUser["fullName"]); //second way to acess elements

console.log(jsUser[mySym])
jsUser.email = "kahn@gmail.com" // can change the values 
//Object.freeze(jsUser) // to freeze so that nobody change the values
jsUser.email = "sultanchatgpt#.com"
console.log(jsUser)


// adding a function in a object treated as a type1 citizen

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greetingtwo()); //undefined is shown because one execution is done automatically