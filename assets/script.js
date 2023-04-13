var searchedCityH2 = document.getElementById("searchedcity");
var searchedTempP = document.getElementById("searchedtemp");
var searchedWindP = document.getElementById("searchedwind");
var searchedHumidityP = document.getElementById("searchedhumidity");
var searchBtn = document.getElementById("citysearchbtn");
var searchInput = document.getElementById("citynameinput");
var oneH3 = document.getElementById("onedate");
var oneTempP = document.getElementById("onetemp");
var oneWindP = document.getElementById("onewind");
var oneHumidityP = document.getElementById("onehumidity");
var twoH3 = document.getElementById("twodate");
var twoTempP = document.getElementById("twotemp");
var twoWindP = document.getElementById("twowind");
var twoHumidityP = document.getElementById("twohumidity");
var threeH3 = document.getElementById("threedate");
var threeTempP = document.getElementById("threetemp");
var threeWindP = document.getElementById("threewind");
var threeHumidityP = document.getElementById("threehumidity");
var fourH3 = document.getElementById("fourdate");
var fourTempP = document.getElementById("fourtemp");
var fourWindP = document.getElementById("fourwind");
var fourHumidityP = document.getElementById("fourhumidity");
var fiveH3 = document.getElementById("fivedate");
var fiveTempP = document.getElementById("fivetemp");
var fiveWindP = document.getElementById("fivewind");
var fiveHumidityP = document.getElementById("fivehumidity");
var buttons = document.getElementById("inputarea");

var APIKey = "4c34d8d8ec08ac9c00d227658c97fec3";
var city = "";
var queryURL = "";
var lastSearch = "";
var savedCities = [" "];

function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function createBtn(str){
  var newBtn = document.createElement("button");
  newBtn.classList.add("w-75");
  newBtn.classList.add("m-2");
  newBtn.classList.add("p-2");
  newBtn.textContent = str;
  buttons.appendChild(newBtn);
  newBtn.addEventListener("click", function(){
    queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + newBtn.textContent + "&appid=" + APIKey;
    searchExtra();
  })
}

function search(){
  var lat = "";
  var lon = "";
  fetch(queryURL)
  .then(function (response) {
      return response.json();
    })
      .then(function (data){
          console.log(data);
          if(data.cod === "404"){
            alert(city + " not found.");
            return;
          }
          if(!savedCities.includes(city)){
            createBtn(city);
            savedCities.push(city);
            if(savedCities.includes(" ")){
              savedCities.shift();
            }
          }
          localStorage.setItem("Saved Cities", JSON.stringify(savedCities));
          document.getElementById('citynameinput').value = '';
          lastSearch = city;
          searchedCityH2.textContent = "Current weather in " + city;
          lat = data.coord.lat;
          lon = data.coord.lon;
          searchedTempP.textContent = "Temperature:  " + Math.round(((data.main.temp)-273.15)*9/5+32) + "° F";
          searchedWindP.textContent = "Wind:  " + data.wind.speed + " mph";
          searchedHumidityP.textContent = "Humidity:  " + data.main.humidity + "%";
          searchTwo()
      })

      
  function searchTwo(){
    var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
  fetch(fiveDay)
  .then(function (response) {
      return response.json();
    })
      .then(function (data){
          console.log(data);
          oneH3.textContent = data.list[6].dt_txt.slice(5,10);
          oneTempP.textContent = "Temperature:  " + Math.round(((data.list[6].main.temp)-273.15)*9/5+32) + "° F";
          oneWindP.textContent =  "Wind:  " + data.list[6].wind.speed + " mph";
          oneHumidityP.textContent = "Humidity:  " + data.list[6].main.humidity + "%";
          twoH3.textContent = data.list[14].dt_txt.slice(5,10);
          twoTempP.textContent = "Temperature:  " + Math.round(((data.list[14].main.temp)-273.15)*9/5+32) + "° F";
          twoWindP.textContent =  "Wind:  " + data.list[14].wind.speed + " mph";
          twoHumidityP.textContent = "Humidity:  " + data.list[14].main.humidity + "%";
          threeH3.textContent = data.list[22].dt_txt.slice(5,10);
          threeTempP.textContent = "Temperature:  " + Math.round(((data.list[22].main.temp)-273.15)*9/5+32) + "° F";
          threeWindP.textContent =  "Wind:  " + data.list[22].wind.speed + " mph";
          threeHumidityP.textContent = "Humidity:  " + data.list[22].main.humidity + "%";
          fourH3.textContent = data.list[30].dt_txt.slice(5,10);
          fourTempP.textContent = "Temperature:  " + Math.round(((data.list[30].main.temp)-273.15)*9/5+32) + "° F";
          fourWindP.textContent =  "Wind:  " + data.list[30].wind.speed + " mph";
          fourHumidityP.textContent = "Humidity:  " + data.list[30].main.humidity + "%";
          fiveH3.textContent = data.list[38].dt_txt.slice(5,10);
          fiveTempP.textContent = "Temperature:  " + Math.round(((data.list[38].main.temp)-273.15)*9/5+32) + "° F";
          fiveWindP.textContent =  "Wind:  " + data.list[38].wind.speed + " mph";
          fiveHumidityP.textContent = "Humidity:  " + data.list[38].main.humidity + "%";
      })
  }
}

function searchExtra(){
  var lat = "";
  var lon = "";
  fetch(queryURL)
  .then(function (response) {
      return response.json();
    })
      .then(function (data){
          console.log(data);
          if(data.cod === "404"){
            alert("City not found.");
            return;
          }
          localStorage.setItem("Saved Cities", JSON.stringify(savedCities));
          searchedCityH2.textContent = "Current weather in " + city;
          lat = data.coord.lat;
          lon = data.coord.lon;
          searchedTempP.textContent = "Temperature:  " + Math.round(((data.main.temp)-273.15)*9/5+32) + "° F";
          searchedWindP.textContent = "Wind:  " + data.wind.speed + " mph";
          searchedHumidityP.textContent = "Humidity:  " + data.main.humidity + "%";
          searchTwo()
      })

      
  function searchTwo(){
    var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
  fetch(fiveDay)
  .then(function (response) {
      return response.json();
    })
      .then(function (data){
          console.log(data);
          oneH3.textContent = data.list[6].dt_txt.slice(5,10);
          oneTempP.textContent = "Temperature:  " + Math.round(((data.list[6].main.temp)-273.15)*9/5+32) + "° F";
          oneWindP.textContent =  "Wind:  " + data.list[6].wind.speed + " mph";
          oneHumidityP.textContent = "Humidity:  " + data.list[6].main.humidity + "%";
          twoH3.textContent = data.list[14].dt_txt.slice(5,10);
          twoTempP.textContent = "Temperature:  " + Math.round(((data.list[14].main.temp)-273.15)*9/5+32) + "° F";
          twoWindP.textContent =  "Wind:  " + data.list[14].wind.speed + " mph";
          twoHumidityP.textContent = "Humidity:  " + data.list[14].main.humidity + "%";
          threeH3.textContent = data.list[22].dt_txt.slice(5,10);
          threeTempP.textContent = "Temperature:  " + Math.round(((data.list[22].main.temp)-273.15)*9/5+32) + "° F";
          threeWindP.textContent =  "Wind:  " + data.list[22].wind.speed + " mph";
          threeHumidityP.textContent = "Humidity:  " + data.list[22].main.humidity + "%";
          fourH3.textContent = data.list[30].dt_txt.slice(5,10);
          fourTempP.textContent = "Temperature:  " + Math.round(((data.list[30].main.temp)-273.15)*9/5+32) + "° F";
          fourWindP.textContent =  "Wind:  " + data.list[30].wind.speed + " mph";
          fourHumidityP.textContent = "Humidity:  " + data.list[30].main.humidity + "%";
          fiveH3.textContent = data.list[38].dt_txt.slice(5,10);
          fiveTempP.textContent = "Temperature:  " + Math.round(((data.list[38].main.temp)-273.15)*9/5+32) + "° F";
          fiveWindP.textContent =  "Wind:  " + data.list[38].wind.speed + " mph";
          fiveHumidityP.textContent = "Humidity:  " + data.list[38].main.humidity + "%";
          
      })
  }
}

searchBtn.addEventListener("click", function(){
  city = capitalizeWords(searchInput.value);
  queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
  document.getElementById('citynameinput').value = '';
  search();
})

function loadSavedCities(){
  for (let i = 0; i < savedCities.length; i++) {
    createBtn(savedCities[i]);
  }
}
var storageCities = JSON.parse(localStorage.getItem("Saved Cities"));
function loadStorage(){
  if(storageCities != null){
    savedCities = storageCities;
    loadSavedCities();
  }
}
loadStorage();