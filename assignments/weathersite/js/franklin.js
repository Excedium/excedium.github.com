let weatherRequest = new XMLHttpRequest();
var apiURL = '//api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=233df09d78276541a4dd429ca974bc3d&units=imperial'
weatherRequest.open('GET', apiURL, true);

weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
    document.getElementById('description').innerHTML = weatherData.weather["0"].description;
    document.getElementById('highT').innerHTML = weatherData.main.temp_max;
    document.getElementById('lowT').innerHTML = weatherData.main.temp_min;
    document.getElementById('windS').innerHTML = weatherData.wind.speed;
    
    
    var iconcode = weatherData.weather["0"].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather-icon').src = icon_path;
    
}