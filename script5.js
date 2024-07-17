// today we are gonna learn functions and methods in JS.

// function myfunc(){
//     console.log("i am shivesh , i am the best");
//     console.log("i am shivangi , i am the best");
// }

// myfunc();
// myfunc();
// myfunc();
// myfunc();
// myfunc();


// function myfunc(msg){
//     console.log(msg);
// }

// myfunc("my name is shivesh richhariya");


// function sum(x,y){
//     s = x + y;
//     return s;
// }

// let val = sum(21)

// const arrowfunc = (a ,b) =>{
//     console.log(a+b);
// }


// const arrowmul = (a, b) =>{
//     console.log(a*b);
// }

// function mul(x,y){
//     return x*y
// }

function Countvowels(str){
    let count = 0;
    for(const char of str){
        if (
            char === "a" || 
            char === "e" || 
            char === "i" || 
            char === "o" ||
            char === "u" 
        ) {
            count++;
        }
    }
}

let val = prompt("enter a word")
console.log(count)


