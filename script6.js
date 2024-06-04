function dice(){
    const  numOfDice = document.getElementById('inp').value;
    const diceResult =  document.getElementById('diceresult');
    const diceImages = document.getElementById('diceimages');

    const values = [];
    const images = [];

    for(let i=0;i<numOfDice;i++){
        const value = Math.floor(Math.random() * 6)+1;
         values.push(value);
         images.push(`<img src="dice_images/${value}.png" style="height : 30px">`);
         
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML =  images.join('');
}