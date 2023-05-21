var searchBarForm = document.getElementById("search-bar-form");
var searchBar = document.getElementById("search-bar");
var searchBtn = document.getElementById("search-btn");
var searchedLocation = document.getElementById("searched-location");
var currentLocationWeather = document.getElementById(
  "current-location-weather"
);
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");

function getWeather() {
  event.preventDefault();
  var API =
    `http://api.openweathermap.org/geo/1.0/direct?q=` +
    searchBar.value.trim() +
    `&limit=1&appid=4133bd92cdb18ab4bcf6efd0cbddee4d&units=imperial`;

  fetch(API)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var lat = data[0].lat;
      var lon = data[0].lon;
      var getAPI =
        `https://api.openweathermap.org/data/2.5/weather?lat=` +
        lat +
        `&lon=` +
        lon +
        `&appid=4133bd92cdb18ab4bcf6efd0cbddee4d&units=imperial`;
      console.log(getAPI);
      fetch(getAPI)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var loc = data.name;
          var tempData = data.main.temp;
          var windData = data.wind.speed;
          var humidityData = data.main.humidity;
          searchedLocation.textContent = loc;
          temp.textContent = "Temp: " + tempData + "° F";
          wind.textContent = "Wind: " + windData + " MPH";
          humidity.textContent = "Humidity: " + humidityData + "%";
        });
    });
}

searchBarForm.addEventListener("submit", getWeather);
