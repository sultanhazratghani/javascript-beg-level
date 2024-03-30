// setTimeout(function(){

//     console.log("run after two seconds");

// }, 10000)


// js main ek concept hai jiska matlab hota hai k functions ko use
// karsakte ho as a value (first class function)
 



function abcd(a){
    a();

}

abcd(function()
    {
        console.log("hello");
    }
    )



    var arr = [2,3,4,5,6]; // this is not array this is object


    // var arr{                 this way array is converted to object
    //     0: 2,
    //     1: 3,
    //     2: 4,
    //     3: 5,
    //     4: 6

    // }
    arr[-1]=2
    console.log(arr);

    console.log(Array.isArray([]));
    console.log(Array.isArray({}));


    // how to delete objects props

    var b = {
        name: "sultan",
        age:24
        }
         
        delete b.name,
        delete b.age;
        console.log(b)