const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = ""

weatherForm.addEventListener("submit" , event => {

    event.preventDefault();

    const city = cityInput.value;
    if(city){

    }
    else{
        displayError("please Enter a city")
    }
})

async function getWeatherData(city){

}

function displayWeatherInfo(data){

}

function getWeatherEmoji(weatherId){

}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    

    // 11hours 40mins resume

}