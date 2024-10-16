// const number = [1,2,3,4,5]
// const squares = number.map(square);
// console.log(squares);

// function square(element){
//     return Math.pow(element,2);
// }

// exmaple 2

const students = ["vatsal", "vijit" , 'verma' ,'rinisha'];
const studentsUpper = students.map(uppercase)
console.log(studentsUpper)
function uppercase(element){
    return element.toUpperCase();
}