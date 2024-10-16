let timeout ;
function startTimer(){
timeout = setTimeout(() => window.alert(`hey there people `) ,3000);
console.log(`time has been started`)
}

function stopTimer(){
    clearTimeout(timeout);
    console.log(`time has been stoped for god's sake`)
}