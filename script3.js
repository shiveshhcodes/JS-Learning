// loops!!

// FOR LOOOOOOOP!!!


// for (let i=1 ; i<=13 ; i++) {
//     console.log("i = " , i)
// }

// console.log(i)

// calculate sum from 1 to 5:

// let sum = 0;
// let n = 12;
// for (let i = 1 ; i<=n ; i++) {
//    sum = sum + i;
// }
// console.log(sum)



// WHILE LOOOOOOOOP!!!

// let i = 1;
// while (i<= 10) {
//     console.log("shivesh" , i);
//     i++;
// }


// DO - WHILE - LOOP

// let i = 20;

// do {
//     console.log("Apna College")
//     i++ ;
// } while (i<=40) ;



// for - of Loop!!


// let str = "shibudon";
// let size = 0;

// for (let i of str) {
//     console.log("letter =" , i);
//     size++
// }

// console.log("string size is = " , size);


// FOR - IN LOOPS

// let student = {
//     name : "shivesh" ,
//     age : 21 ,
//     cgpa: 7.5 ,
//     isPass: true ,
// } ;

// for (let i in student) {
//     console.log("the key is" , i , "& it's value is" , student[i])
// } ;

// practice question 1

// for (let i = 0 ; i<=300 ; i++){
//     if (i%2===0) {
//        console.log("even num is" , i)
//     }
// }


// practice question 2

//  let gameNum = 25;
//  let userNum = prompt("Guess the number");

//  while(gameNum != userNum) {
//     userNum = prompt("You entered wrong number , enter a number again")
//  }

//  console.log("congratulations , you hit the right number ")


// strings in js


// let str = "shivesh"
// let str2 = 'shivesh'
// str.length

// console.log(str.length)

// STRING METHODS

// let str1 = "wowboss ";
// let str2 = "2525";
// let newstr = str.toLowerCase();
// let newstr = str.toUpperCase();
// let newstr = str.trim();
// let newstr = str.slice(2,5)
// let newstr = str1.concat(str2)
// let newstr = str1.replace("wow" , "boss")
// let newstr =str1.charAt(2)

// console.log(newstr)

let fullName = prompt("enter your Full name");
let lengthname = fullName.length;
let username = "@";

let final = username.concat(fullName , lengthname);
console.log(final);

