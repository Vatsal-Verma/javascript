// setTimeout(function(){
//     console.log(` this is something new to me ain't that true homie?`);
// },3000);
const number = [1,2,3,4,5];
const squares = number.map(function(element){
    return Math.pow(element,2);
});
console.log(squares);
