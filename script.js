function displayTemperature(response) {
  // displays the current temperature for the city that was searched for
  let temperatureElement = document.querySelector("#city-temp");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function newCity(event) {
  // changes the city to data in input
  event.preventDefault();
  let inputCity = document.querySelector("#search-input");
  let city = inputCity.value;

  let apiKey = "3b0e0f1639296410oabf7a45tcd4001b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function currentTime(date) {
  //changes date and time to current
  let now = new Date();
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
  let hour = now.getHours();
  let minute = now.getMinutes();

  let correctTime = `${day} ${hour}:${minute}`;
  return correctTime;
}

//city
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", newCity);

//date
let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = currentTime(currentDate);
