let number  = [1,2,3,4,5,6,7,8,9];
let evennumber = number.filter(iseven);
let oddnumber = number.filter(isodd);
console.log(evennumber)
console.log(oddnumber);
function iseven(element){
    return element%2==0;
}
function isodd(element){
    return element%2!=0;
}