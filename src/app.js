//Time function
function formatDate(timestamp){
    let date = new Date(timestamp);
    let hours= date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
      }

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];

    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}
//general API
function displayTemperature(response){
    console.log(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#speed");
    let dateElement = document.querySelector("#date");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML =  response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    wind.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt * 1000);  
}

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLat}&lon=${currentLon}&appid=${apiKey}&units=${globalUnits}`;
axios.get(apiUrl).then(displayWeatherCondition);

//
  let dateElement = document.querySelector("#date");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  
  
    //Global parameters
  
      let globalUnits = "metric";
      let globalCityTempC= 12;
      let globalCityTempF= calculFahrenheit(globalCityTempC);
   
      //geolocalisation API
  
    
    function searchCity(city) {
      let units = "metric";
          }
    
    function handleSubmit(event) {
      event.preventDefault();
      let city = document.querySelector("#city-input").value;
      searchCity(city);
    }
    
    function searchLocation(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let units = "metric";
      }
    
    let form = document.querySelector("#search-form");
    form.addEventListener("submit", handleSubmit);
    
    let currentLocationButton = document.querySelector("#current-location-button");
    currentLocationButton.addEventListener("click", getCurrentLocation);
    
      searchCity("Saintes");
    
    function getCurrentLocation(event) {
      event.preventDefault();
      navigator.geolocation.getCurrentPosition(searchLocation);
    }
    
    //Temperature metrics 

    function convertToFahrenheit(event) {
      event.preventDefault();
    }
  
    function convertToCelsius(event) {
      event.preventDefault();
    
    }
    function calculFahrenheit (centigrades) {
    return Number(centigrades)* (9/5) + 32;
  }
  
  function calculCentigrades(fahrenheit) {
    return (Number(fahrenheit) - 32) * (5/9);
  }
  
  function changeUnits() {
    determineTempUnits();
    axios.get(url).then(displayTempAndWeatherToUserFromResponse);
  
    if (units === "metric") {
      tempDisplay.innerHTML = `${Math.round(cityTempC)} °C`;
      windDisplay.innerHTML = `Wind ${Math.round(windSpeedms)} m/s`;
    } else if (globalUnits === "imperial") {
      tempDisplay.innerHTML = `${Math.round(cityTempF)} °F`;
     
    }
  
    } 
  
    let celsiusLink= document.querySelector("#celsius-link");
    let fahrenheitLink= document.querySelector("#fahrenheit-link");
    let elementTemp = document.querySelector("#current-temperature");
  
    celsiusLink.addEventListener("click", convertToCelsius);
    fahrenheitLink.addEventListener("click", convertToFahrenheit);
  