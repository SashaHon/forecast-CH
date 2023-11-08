import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export function Article({ data }) {
  const [iconCode, setIconCode] = useState(null);

  useEffect(() => {
    if (data[0] !== "wind") {
      setIconCode(getIconClass(data[0], data[1]));
    } else if (data[0] === "wind") {
      setIconCode("fontisto:wind");
    }
  }, [data]);

  return (
    <article className="w-1/4">
      <h3 className="text-lg capitalize text-center">{data[0]}</h3>

      <Icon icon={iconCode} className="mx-auto mt-4" />

      <p className="text text-center mt-2">{data[1]}</p>
    </article>
  );
}

function getIconClass(type, value) {
  const conditionsMap = {
    temperature: {
      "mingcute:high-temperature-fill": value >= 28,
      "mdi:temperature-high": value >= 20 && value < 28,
      "mdi:temperature": value >= 10 && value < 20,
      "mdi:temperature-low": value >= 0 && value < 10,
      "mingcute:low-temperature-line": value < 0,
    },
    humidity: {
      "material-symbols:humidity-high": value > 65,
      "material-symbols:humidity-mid": value >= 30 && value <= 65,
      "material-symbols:humidity-low": value < 30,
    },
    rain: {
      "bi:cloud-rain-fill": value > 5,
      "wi:day-rain": value >= 2 && value <= 5,
      "material-symbols:cloud-outline": value >= 0.5 && value < 2,
      "tabler:sun-filled": value < 0.5,
    },
  };
  return Object.entries(conditionsMap[type]).find(([_, value]) => value)?.[0];
}
