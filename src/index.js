function showTemperature(response) {
  let currentTemperature = Math.round(response.data.main.temp);
  console.log(response);
  console.log(currentTemperature);

  let city = response.data.name;
  let message = `It is ${currentTemperature} degrees in ${city}`;

  let h1 = document.querySelector("#tempHarbin");
  h1.innerHTML = message;
}

let apiKey = "2718952144ed077c12e7c160fb6fc351";
let units = "metric";
let city = "harbin";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);
