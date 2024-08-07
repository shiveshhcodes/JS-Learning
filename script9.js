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

class person {
    constructor() {
        this.species = "homo sapiens"
    }
}
