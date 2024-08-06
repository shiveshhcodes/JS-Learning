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

class tataCars {
    start() {
        console.log("start")
    }

    stop() {
        console.log("stop")
    }

    setBrand(brand) {
        this.brand = brand
    }
}

let safari = new tataCars();

safari.setBrand("safari")
