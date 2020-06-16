//challnge 1 HTML/CSS to JS
let now = new Date();
let currentDay = document.querySelector("h5#current-day");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let currentTime = document.querySelector("h6#current-time");
let hours = now.getHours();
let minutes = now.getMinutes();

currentDay.innerHTML = `${day}`;
currentTime.innerHTML = `${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#input-search-city").value;
  showCity(city);
}

function showCurrentWeather(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function showCity(city) {
  let apiKey = "91dd9571694065e99a37dfcdc3f1bcb5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentWeather);
}

function showLocation(position) {
  let apiKey = "91dd9571694065e99a37dfcdc3f1bcb5";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showLocation);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

//bonus (C to F conversion link and back)
//function convertToFahrenheit(event) {
//event.preventDefault();
//let temperatureElement = document.querySelector("#temperature");
//temperatureElement.innerHTML = 66;
//}

//function convertToCelsius(event) {
//event.preventDefault();
//let temperatureElement = document.querySelector("#temperature");
//temperatureElement.innerHTML = 19;
//}

//let fahrenheitLink = document.querySelector("#fahrenheit-link");
//fahrenheitLink.addEventListener("click", convertToFahrenheit);

//let celsiusLink = document.querySelector("#celsius-link");
//celsiusLink.addEventListener("click", convertToCelsius);
