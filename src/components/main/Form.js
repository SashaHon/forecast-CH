import React, { useEffect, useState } from "react";
import citiesData from "../../assets/data/coordinates.json";

export function Form(props) {
  const { onLocationChange } = props;
  const [cities, setCities] = useState(null);
  const [inputValue, setInputValue] = useState(null);

  useEffect(() => {
    let sorted = citiesData.sort((a, b) => (a.city > b.city ? 0 : -1));
    setCities([
      {
        city: "Switzerland",
        lat: "47,0002",
        lng: "8,0143",
        country: "Switzerland",
        iso2: "CH",
        capital: "admin",
      },
      ...sorted,
    ]);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    let city = cities.find((el) => el.city === inputValue);
    if (city) {
      onLocationChange([city.lat, city.lng]);
    } else {
      e.target.reset();
    }
  }

  function handleInputOnChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cities">Choose city: </label>
      <input
        name="cities"
        id="cities"
        list="citiesList"
        onChange={handleInputOnChange}
      ></input>
      <datalist id="citiesList">
        {cities &&
          cities.map((city, index) => {
            return <option value={city.city} key={city.city + index}></option>;
          })}
      </datalist>
      <input type="submit" value="Search"></input>
    </form>
  );
}

//add func if city is a cantonal center make it bold;
