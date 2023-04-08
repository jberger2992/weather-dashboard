var searchedCityH2 = document.getElementById("searchedcity");
var searchedTempP = document.getElementById("searchedtemp");
var searchedWindP = document.getElementById("searchedwind");
var searchedHumidityP = document.getElementById("searchedhumidity");
var searchBtn = document.getElementById("citysearchbtn");
var searchInput = document.getElementById("citynameinput");

var APIKey = "4c34d8d8ec08ac9c00d227658c97fec3";
var city = "";
var queryURL = "";
var asd = "";
function search(){
fetch(queryURL)
.then(function (response) {
    return response.json();
  })
    .then(function (data){
        console.log(data);
        searchedTempP.textContent ="Temperature: " + data.main.temp;
        searchedWindP.textContent ="Wind: " + data.wind.speed;
        searchedHumidityP.textContent ="Humidity: " + data.main.humidity;
    })



fetch(asd)
.then(function (response) {
    return response.json();
  })
    .then(function (data){
        console.log(data);
    })
  }
  searchBtn.addEventListener("click", function(){
    city = searchInput.value;
    queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    asd = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + APIKey;
    searchedCityH2.textContent = "Current weather in " + city;
    search();
  })