const apiKey = "7a8e7d3752f1948199393d47955923ea";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

document.getElementById("searchBtn").addEventListener("click",function(){
    let cityName =  document.getElementById("cityName").value
    checkWeather(cityName)
})

async function checkWeather(cityName) {
    const response = await fetch (apiUrl + `&appid=${apiKey}` + `&q=${cityName}`);
    var data = await response.json();
    
    document.getElementById("city").innerHTML = data.name
    document.getElementById("temp").innerHTML = data.main.temp+"°C"
    document.getElementById("humi").innerHTML = data.main.humidity+"%"
    document.getElementById("wind").innerHTML = data.wind.speed + " km/h"
    
}