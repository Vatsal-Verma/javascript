const mybox = document.getElementById("mybox");
const mybutton = document.getElementById("mybutton");

mybutton.addEventListener( "click",  event => {
     event.target.style.backgroundColor = "tomato"
    event.target.textContent = "OUCH !!! 💀"
});

// we can pass either a callback or an anonymous function


mybutton.addEventListener("mouseover" , event =>{
     event.target.style.backgroundColor = "tomato"
    event.target.textContent = "don't please !!! 💀"
})
mybutton.addEventListener("mouseout" , event =>{
    event.target.style.backgroundColor = "lightcyan"
   event.target.textContent = " click me 😂"
})