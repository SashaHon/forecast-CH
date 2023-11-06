import React from "react";
import { Article } from "./Article";

export function Main() {
  const displayData = ["Temperature", "Humidity", "Rain", "Wind"];
  return (
    <main>
      {displayData.map((el) => (
        <Article title={el} />
      ))}
    </main>
  );
}
