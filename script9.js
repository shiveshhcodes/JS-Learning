// today we are gonna learn classes and objects

// this is what and where prototypes are used!!
// const student = {
//     fullName : "shivesh Richhariya" ,
//     Marks : "95.3" ,
//     printMarks : function(){
//         console.log("marks is = " , this.Marks);
//     }
// }

// const shivesh = {
//     Marks: 21,
// };

// shivesh.__proto__ = student;

// class tataCars {
//     constructor(brand , mileage){
//         console.log("creating new object")
//         console.log("creating new object")
//         this.brand = brand
//         this.mileage = mileage
//     }
//     start() {
//         console.log("start")
//     }

//     stop() {
//         console.log("stop")
//     }
// }

// let safari = new tataCars("safari" , 10);

// class person {
//     constructor() {
//         this.species = "homo sapiens"
//     }

//     eat(){
//         console.log("they eat")
//     }

//     sleep(){
//         console.log("they are borned to be sleep")
//     }
// }

// class enginner extends person {
//     constructor(branch) {
//         super() ;
//         this.branch = branch
//     }

//   sleep() {
//     console.log("average age of sleep is 21")
//   }
// }

// let shivesh = new enginner("CS");

let DATA = "secret info";
class user {
    constructor(name , email) {
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("User : " , this.name)
        console.log("Email : " , this.email)
        console.log("Basic Data: " , DATA)
    }
}

class Admin extends user {
    constructor(name, email){
        super(name, email);
    }
        editData(){
        DATA = "some new value";
    }

}

let student1 = new user("shiveshh" , "abc@gmail.com")
let student2 = new user("ayush" , "bcc@gmail.com")
let student3 = new user("tejas" , "ccb@gmail.com")

let admin1 = new Admin("admin" , "admin")