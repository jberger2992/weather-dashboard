var asd = "https://api.openweathermap.org/data/2.5/forecast?q=indianapolis&appid=4c34d8d8ec08ac9c00d227658c97fec3";

fetch(asd)
.then(function (response) {
    return response.json();
  })
    .then(function (data){
        console.log(data);
    })