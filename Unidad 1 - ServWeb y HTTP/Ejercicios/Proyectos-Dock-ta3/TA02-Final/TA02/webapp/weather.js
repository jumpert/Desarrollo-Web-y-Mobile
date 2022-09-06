const coordinates = {
    "Madrid":[40.4167,-3.7033],
    "Berlin":[52.5235,13.4115],
    "Paris":[48,8567,2,3510]
};

function getWeatherByCity(city) {
    var coordinates = getCoordinates(city);
    return getWeather(coordinates[0], coordinates[1]);
  }
  
  function getCoordinates(city) {
      if (city in coordinates) {
        return coordinates[city];
      } else {
        //MANEJAR ERROR
      }
    }
  
  async function fetchAPI(latitude, longitude, date) {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&start_date=${date}&end_date=${date}`;
  
      var request = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then((response) => response.json())
      // .then((data) => {
      //   return data;
      // });
      
  }
  
  async function getWeather(){
    var city = document.getElementById("selectCity").value;
    var date = document.getElementById("date").value;
    // Obtengo las coordenadas del diccionario
    let coordinates = getCoordinates(city);
    // Obtengo la temperatura de la API
    let weather = await fetchAPI(coordinates[0], coordinates[1], date);

    // Obtengo la temperatura de la hora que me interesa
    var time = date.split(" ")[1];
    var hour = time.split(":")[0];
    var weatherOnGivenTime = weather['hourly']['temperature_2m'][hour-1];
    
    return weatherOnGivenTime;
    console.log(weatherOnGivenTime);
}
  
  /*
  Cuando se haga click sobre Aceptar, ejecutar una función que llame a getWeather pasando como parametro los valores de los inputs
  */