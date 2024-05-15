

// // 3 types
// // funvtion declaration and function expression or anonymous function,arrow funcrtion, callbacck function

// function sum(){  //fun declare
//     console.log("hello");   //sttmt
// }
// sum()  //fun call


// // passing parameters
// function s(a,b){
//     let c=a+b;
//     console.log(c);
// }

// s(4,5)

// // anonymoous function- 

// let add=function(d,e){
//     let f=d+e;
//     console.log(f);
// }
// add(3,4)

// arrow function-es6 
let ad=(a,b)=>{
    return a+b;
}
console.log(ad(3,2));


// or
let add=(c,d)=>c+d
    
    console.log(add(5,5));

    // callback function-


    function greet(name,call){
        console.log("hello "+name);
        call()

    }
    function sayGoodbye(){
        console.log("good bye");
    }
    greet("freena",sayGoodbye)

    

