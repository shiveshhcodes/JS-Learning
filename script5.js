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


// let sq = [99,67,32,332,556,231,4312,2232,2343]
// let square = ((sq) => {
//     console.log(sq*sq)
// })

// // the above can be used as a defination of square
// sq.forEach(square)

// now let discover map method.

// let newArr = sq.map((val) => {
//     return val*val;
// });

// console.log(newArr)


// now discover filter method - 

// let newSq = sq.filter((val) =>{
//     return val% 2===0;
// })
// console.log("the original array is " , sq)
// console.log("the divide by 3 filtered array is ", newSq)

// let sum = 0;
// for (let val of newSq){
//     sum+=val
// }

// console.log("total sum of filtered array is" , sum)

// const output = newSq.reduce((prev , curr) => {
//     return prev + curr
// })
// console.log("the sum of filtered values are",output)

// let input = sq.reduce((pre , cur) => {
//     return pre>cur ? pre : cur;
// });

// console.log("the largest number among filtered values are",input)

// let innput = sq.reduce((pr , cu) => {
//     return pr<cu ? pr : cu;
// });

// console.log("the smallest number among filtered values are",innput)


// let marks = [21,56,98,93,78,90,56,76,96]

// let highMarks = marks.filter((val) =>{
//     return val>90;
// })

console.log("marks of students who scored more then 90+ are ",highMarks)


let n = prompt("enter a new numberr : ");

let arr = [];

for (let i = 1 ; i<=n; i++){
    arr[i-1] = i;
}

console.log("the values are from number you entered is",arr)

// the sum of numbers code
 const sum = arr.reduce((prev , curr)=>{
 return prev + curr
})

console.log("the sum of above values of array is",sum)

// the product of code is - 

const product = arr.reduce((prev,curr)=>{
    return prev * curr ;
}) ; 

console.log("the factorial product value iss",product)