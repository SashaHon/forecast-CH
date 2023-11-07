import React from "react";
import "./Header.css";
import image from "../../assets/img/image.jpg";

export function Header() {
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
      <div className="">
        <h1>🇨🇭Swiss🇨🇭 Current Weather Forecast</h1>
        <p>The forecast is presentend according to current time</p>
        <h2>
          {date} {month} {time}
        </h2>
      </div>
    </header>
  );
}

// function getCurrentHour() {
//   const currentTime = new Date().toISOString();
//   return +currentTime.slice(11, 13) + 1;
// }
