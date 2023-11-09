import React, { useEffect, useState } from "react";
import citiesData from "../../assets/data/coordinates.json";

export function Form(props) {
  const { onLocationChange, getCityName } = props;
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
    let cityData = cities.find((el) => el.city === inputValue);
    if (cityData) {
      getCityName(cityData.city);
      onLocationChange([cityData.lat, cityData.lng]);
    } else {
      e.target.reset();
    }
  }

  function handleInputOnChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <fieldset onSubmit={handleSubmit} className="self-end">
      <label htmlFor="cities" className="text-sm font-light mx-1">
        Looking for another city?
      </label>
      <form>
        <input
          name="cities"
          id="cities"
          list="citiesList"
          onChange={handleInputOnChange}
          className="rounded"
        ></input>

        <datalist id="citiesList">
          {cities &&
            cities.map((city, index) => {
              return (
                <option value={city.city} key={city.city + index}></option>
              );
            })}
        </datalist>

        <input
          type="submit"
          value="Search"
          className="rounded ml-2  bg-slate-800 text-white py-2 px-6 border border-solid border-slate-800 hover:bg-slate-400  hover:border-slate-400 active:ring-2 active:ring-slate-400 active:bg-slate-800 active:text-white"
        ></input>
      </form>
    </fieldset>
  );
}

//add func if city is a cantonal center make it bold;
