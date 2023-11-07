import React, { useEffect } from "react";
import { Article } from "./Article";

export function Main() {
  const displayData = ["Temperature", "Humidity", "Rain", "Wind"];

  renderWeatherDataResponse();

  return (
    <main className="min-h-full">
      {displayData.map((el, index) => (
        <Article key={"key-" + index} title={el} />
      ))}
    </main>
  );
}

async function renderWeatherDataResponse() {
  try {
    const response = await getForecastDataJson(
      "https://api.open-meteo.com/v1/forecast?latitude=47.0002&longitude=8.0143&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,rain,windspeed_10m"
    );
    const weatherData = await response.json();
    const currentHour = getCurrentHour();
    const currentTemperature = getCurrentTemperature(weatherData, currentHour);
    const currentRelativeHumidity = getCurrentRelativeHumidity(
      weatherData,
      currentHour
    );
    const currentWindSpeed10m = getCurrentWindSpeed10m(
      weatherData,
      currentHour
    );
    const currentRain = getCurrentRain(weatherData, currentHour);

    console.log(weatherData);
    console.log(currentHour);
    // renderForecastData(
    //   currentTemperature,
    //   currentRelativeHumidity,
    //   currentWindSpeed10m,
    //   currentRain
    // );
  } catch {
    // render error message
  }
}

function getForecastDataJson(address) {
  return fetch(address);
}

function getCurrentHour() {
  const currentTime = new Date().toISOString();
  return +currentTime.slice(11, 13) + 1;
}

function getCurrentTemperature(json, currentHour) {
  const currentTemperatureArray = json.hourly.temperature_2m;
  const currentTemperature = currentTemperatureArray[currentHour];
  return currentTemperature ?? "Information temporary is unavailable";
}

function getCurrentRelativeHumidity(json, currentHour) {
  const relativeHumidityArray = json.hourly.relativehumidity_2m;
  const currentHumidity = relativeHumidityArray[currentHour];
  return currentHumidity ?? "Information temporary is unavailable";
}

function getCurrentWindSpeed10m(json, currentHour) {
  const windSpeed10mArray = json.hourly.windspeed_10m;
  const currentWindSpeed10m = windSpeed10mArray[currentHour];
  return currentWindSpeed10m ?? "Information temporary is unavailable";
}

function getCurrentRain(json, currentHour) {
  const rainArr = json.hourly.rain;
  const currentRain = rainArr[currentHour];
  return currentRain ?? "Information temporary is unavailable";
}

function getIconClass(type, value) {
  const conditionsMap = {
    temperature: {
      "t-very-high": value >= 21 && value < 38,
      "t-high": value >= 10 && value < 21,
      "t-normal": value >= 0 && value < 10,
      "t-low": value < 0,
    },
    humidity: {
      "h-high": value > 65,
      "h-normal": value >= 30 && value <= 65,
      "h-low": value < 30,
    },
    rain: {
      "r-rain": value > 5,
      "r-cloud-sun-rain": value >= 2 && value <= 5,
      "r-cloud": value >= 0.5 && value < 2,
      "r-sun": value < 0.5,
    },
  };

  return Object.entries(conditionsMap[type]).find(([_, value]) => value)?.[0];
}

function renderForecastData(
  currentTemperature,
  currentRelativeHumidity,
  currentRain,
  currentWindSpeed10m
) {
  const temperatureTag = document.querySelector("#temperature");
  const relativeHumidityTag = document.querySelector("#relativeHumidity");
  const rainTag = document.querySelector("#rain");
  const windSpeedTag = document.querySelector("#windSpeed");

  const temperatureDiv = document.querySelector("#icon-temperature");
  const humidityDiv = document.querySelector("#icon-humidity");
  const rainDiv = document.querySelector("#icon-rain");

  temperatureDiv.classList.add(getIconClass("temperature", currentTemperature));
  temperatureTag.textContent = `${currentTemperature} °C`;

  humidityDiv.classList.add(getIconClass("humidity", currentRelativeHumidity));
  relativeHumidityTag.textContent = `${currentRelativeHumidity}%`;

  rainDiv.classList.add(getIconClass("rain", currentRain));
  rainTag.textContent = `${currentRain} mm`;

  windSpeedTag.textContent = `${currentWindSpeed10m} km/h`;
}
