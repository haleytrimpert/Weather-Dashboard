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
  var API =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    searchBarForm.value +
    "&limit=1&appid=4133bd92cdb18ab4bcf6efd0cbddee4d";
  console.log(API);
}

searchBtn.addEventListener("click", getWeather);
