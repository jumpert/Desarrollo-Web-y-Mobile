var coordinates = {
  Madrid: [40.4167, -3.7033],
  Berlin: [52.5235, 13.4115],
  Paris: [48, 8567, 2.351],
};


function getWeatherByCity() {
  /*var coordinates = getCoordinates(city);
  return getWeather(coordinates[0], coordinates[1]);
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));*/

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
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
      mode:"no-cors",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((response) => response.json())
    // .then((data) => {
    //   return data;
    // });
    
}

async function getWeather(city, date, time){
    // Obtengo las coordenadas del diccionario
    let coordinates = getCoordinates(city);
    // Obtengo la temperatura de la API
    let weather = await fetchAPI(coordinates[0], coordinates[1], date);

    // Obtengo la temperatura de la hora que me interesa
    var hour = time.split(":")[0];
    var weatherOnGivenTime = weather['hourly']['temperature_2m'][hour];
    
    return weatherOnGivenTime;
    console.log(weatherOnGivenTime);
}



/*
Cuando se haga click sobre Aceptar, ejecutar una función que llame a getWeather pasando como parametro los valores de los inputs
*/