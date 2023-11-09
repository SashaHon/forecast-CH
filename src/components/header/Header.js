import React from "react";
import "./Header.css";
import image from "../../assets/img/image.jpg";

export function Header({ cityName }) {
  const month = new Date().toDateString().slice(4, 7);
  const date = new Date().getDate();
  const time = getCurrentTime();

  function getCurrentTime() {
    const currentTime = new Date().toISOString();
    return +currentTime.slice(11, 13) + 1 + ":" + currentTime.slice(14, 16);
  }

  return (
    <header
      className={`h-56 flex justify-center items-center text-center`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-slate-200/30 p-8 rounded-md">
        <h1 className="text-xl">🇨🇭Current Weather Forecast🇨🇭</h1>
        <p className="text-sm font-light">
          Forecast is presentend according to current time
        </p>
        <h2 className="mt-6 text-2xl">{cityName}</h2>
        <h3 className="mt-1 text-xl">
          {date} {month} {time}
        </h3>
      </div>
    </header>
  );
}

// function getCurrentHour() {
//   const currentTime = new Date().toISOString();
//   return +currentTime.slice(11, 13) + 1;
// }
