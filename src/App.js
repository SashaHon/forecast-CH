import "./App.css";
import { Navigation } from "./components/navigation/Navigation";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Main } from "./components/main/Main";
import { useState } from "react";

function App() {
  const [cityName, setCityName] = useState("Switzerland");

  function getNewCityName(city) {
    setCityName(city);
  }

  return (
    <div className="h-screen flex flex-col">
      <Navigation />
      <Header cityName={cityName} />
      <Main getCityName={getNewCityName} />
      <Footer />
    </div>
  );
}

export default App;
