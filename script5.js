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
// })

//  function Countvowels(str){
//     let count = 0;
//     for(const char of str){
//         if (
//             char === "a" || 
//             char === "e" || 
//             char === "i" || 
//             char === "o" ||
//             char === "u" 
//         ) {
//             count++;
//             console.log(char)
//         }
//     }
//     console.log(count);
// }

// let val = prompt("enter a word");
// Countvowels(val);


// let ar = [21,56,334,545,55]
//  ar.forEach((val , idx , ar) =>{
//     console.log(val , idx , ar)
//  })


let sq = [34,23,223,444,52,21,89]
// let square = ((sq) => {
//     console.log(sq*sq*sq)
// })

// // the above can be used as a defination of square
// sq.forEach(square)

// now let discover map method.

// let newArr = sq.map((val) => {
//     return val*val;
// });

// console.log(newArr)


// now discover filter method - 

let newSq = sq.filter((val) =>{
    return val% 2===0;
})
// console.log("the original array is " , sq)
// console.log("the divide by 3 filtered array is ", newSq)

// let sum = 0;
// for (let val of newSq){
//     sum+=val
// }

// console.log("total sum of filtered array is" , sum)

const output = newSq.reduce((prev , curr) => {
    return prev + curr
})

console.log(output)