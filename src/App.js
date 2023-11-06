import "./App.css";
import { Navigation } from "./components/navigation/Navigation";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Main } from "./components/main/Main";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
