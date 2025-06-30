// apikey:  e2d6211f15a5628e96ce5494a39e4150

let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let w_forecast = document.querySelector(".weather_forecast");
let w_icon = document.querySelector(".weather_icon");
let w_temperature = document.querySelector(".weather_temperature");
let w_minTem = document.querySelector(".weather_min");
let w_maxTem = document.querySelector(".weather_max");


let w_feelsLike = document.querySelector(".weather_feelslike");
let w_humidity = document.querySelector(".weather_humidity");
let w_wind = document.querySelector(".weather_wind");
let w_pressure = document.querySelector(".weather_pressure");

let citySearch = document.querySelector(".weather_search");


// function to convert Kelvin to Celsius
const kelvinToCelsius = (kelvin) => {
  return Math.round(kelvin - 273.15);// Convert & round to 2 decimal places
};

// to get the actual country name

const getCountryName = (code) => {
  return new Intl.DisplayNames([code], { type: "region" }).of(code);
};

// to get the date and time

const getDateTime = (dt) => {

  const curDate = new Date(dt * 1000); // Convert seconds to milliseconds
  console.log(curDate);
  // // const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  console.log(formatter);
  return formatter.format(curDate);
};


let city = 'pune';

// search functionality 

citySearch.addEventListener('submit', (e)=>{
  e.preventDefault();


  let cityName = document.querySelector('.city_name')
  console.log(cityName.value);
  city = cityName.value;
  getWeatherData();
  cityName.value = "";
})



const getWeatherData = async () => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=e2d6211f15a5628e96ce5494a39e4150`;
  try {
    const res = await fetch(weatherUrl);
    const data = await res.json();

    console.log(data);

    const { main, name, weather, wind, sys, dt } = data;

    cityName.innerHTML = `${name}, ${getCountryName(sys.country)}`;

    dateTime.innerHTML = getDateTime(dt);
    

    w_forecast.innerHTML =  weather[0].main;

    w_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png" />`;



      // Convert Kelvin to Celsius before displaying
      w_temperature.innerHTML = `${kelvinToCelsius(main.temp)}&#176;C`;
      w_minTem.innerHTML = `Min: ${kelvinToCelsius(main.temp_min)}&#176;C`;
      w_maxTem.innerHTML = `Max: ${kelvinToCelsius(main.temp_max)}&#176;C`;
  
      w_feelsLike.innerHTML = `Feels like: ${kelvinToCelsius(main.feels_like)}&#176;C`;

  
    w_humidity.innerHTML = `${main.humidity}%`;
    w_wind.innerHTML = `${wind.speed} m/s`;
    w_pressure.innerHTML = `${main.pressure} hPa`;




  } catch (error) {
    console.log(error);
  }
};

document.body.addEventListener("load", getWeatherData());
