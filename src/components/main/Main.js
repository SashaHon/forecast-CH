import React, { useEffect, useState } from "react";
import { Article } from "./Article";
import { Form } from "./Form";

const API =
  "https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,relativehumidity_2m,apparent_temperature,rain,windspeed_10m";
const SWISS_LOCATION = ["47.0002", "8.0143"];

export function Main() {
  const [forecastData, setForecastData] = useState({});
  const [location, setLocation] = useState(SWISS_LOCATION);

  useEffect(() => {
    async function getWeatherData() {
      try {
        const {
          currentTemperature,
          currentRelativeHumidity,
          currentWindSpeed10m,
          currentRain,
        } = await getForecastData(location);

        setForecastData({
          temperature: currentTemperature,
          humidity: currentRelativeHumidity,
          rain: currentRain,
          wind: currentWindSpeed10m,
        });
      } catch (error) {
        console.log("fetching error :(", error);
      }
    }
    getWeatherData();
  }, [location]);

  function handleLocationChange(data) {
    setLocation(data);
  }

  return (
    <main className="grow shrink-0 basis-auto flex flex-wrap justify-between container mx-auto px-20 py-10">
      {forecastData &&
        Object.entries(forecastData).map((entriesArr, index) => {
          return <Article key={"key" + index} data={entriesArr} />;
        })}
      <Form onLocationChange={handleLocationChange} location={location} />
    </main>
  );
}

async function getForecastData(location = SWISS_LOCATION) {
  const [lat, lng] = location;
  const locationQuery = `&latitude=${lat}&longitude=${lng}`;
  const response = await fetch(`${API}${locationQuery}`);
  const forecastJson = await response.json();
  const currentHour = getCurrentHour();
  const currentTemperature = getCurrentTemperature(forecastJson, currentHour);
  const currentRelativeHumidity = getCurrentRelativeHumidity(
    forecastJson,
    currentHour
  );
  const currentWindSpeed10m = getCurrentWindSpeed10m(forecastJson, currentHour);
  const currentRain = getCurrentRain(forecastJson, currentHour);

  return {
    currentTemperature,
    currentRelativeHumidity,
    currentRain,
    currentWindSpeed10m,
  };
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
