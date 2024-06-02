const minimum = 1;
const maxmum = 100;
const answer = Math.floor(Math.random()*(maxmum-minimum+1))+minimum;
console.log(answer);
let attempts=0;
let run = true ;
let guess ;
while(run){
    guess = parseInt(prompt(`guess the number between ${minimum} and ${maxmum}`));
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess>maxmum || guess<minimum){
        alert('please enter a valid number')
    }
    else{
        attempts++;
        if(guess > answer){
            alert('guess a lower number');
        }
        else if(guess< answer){
            alert('guess a larger number please you motherfucker');

        }
        else{
            alert('there you go boi !!!!');
            run = false;
        }
    }
}