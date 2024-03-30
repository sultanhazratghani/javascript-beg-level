//constructor function

function saanchaOfBuscuit(){
    this.height=12;
    this.width=5;
    this.color="brown";
    this.taste="sugary";
}

// when you want to make elements of same properties, in that 
// case we use constructor function


function circularFunction(color){
    this.radius=2;
    this.color=color;
    this.icon=false;
    this.pressable=true;
}

var redButton =new circularFunction("red");
var greenButton = new circularFunction("green")

console.log(redButton);
console.log(greenButton);

// first class function

// which can be treated as values and as a variables are called
// first class function

//=======================================


// new keyword creates a blank object for constructor function
// which is being called just after the new keyword 

function abcd(){
    this.age=12;
}


//=====================

//iife=> immediately invoked function expression

//jQuery $()

// function ko foran chalane ki kala , is tareeka sa ki
// hum log koi private variable bana paaye


(function(){
    var x=12;
})();

console.log(x);
