import React from "react";
import "./Header.css";
import image from "../../assets/img/mountains-background.jpg";

export function Header() {
  // bg - [url("/img/hero-pattern.svg")];
  // bg-[url(${mountainsBackground})]
  return (
    <header
      className={`h-56 flex justify-center items-center text-center `}
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="background-image">
        <h1>🇨🇭Swiss🇨🇭 Current Weather Forecast</h1>
        <h2>The forecast is presentend according to current time</h2>
        {/* <img src={mountainsBackground} alt="some text"></img> */}
      </div>
    </header>
  );
}
