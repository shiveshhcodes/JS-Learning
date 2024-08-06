// today we are gonna learn classes and objects
const student = {
    fullName : "shivesh Richhariya" ,
    Marks : "95.3" ,
    printMarks : function(){
        console.log("marks is = " , this.Marks);
    }
}

const shivesh = {
    Marks: 21,
};

shivesh.__proto__ = student;
