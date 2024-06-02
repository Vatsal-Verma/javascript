const textbox = document.getElementById('box');
const fah = document.getElementById('fahrenheit');
const  cel= document.getElementById('celsius');
const result = document.getElementById('result');
let temp;
function convert(){
    if(fah.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + "F" ;
    }
    else if(cel.checked){
        
        temp = Number(textbox.value);
        temp = (temp - 32 ) * (5/9);
        result.textContent = temp + "C" ;

    }
    else{
        result.textContent = "Please select a field";
    }
}
