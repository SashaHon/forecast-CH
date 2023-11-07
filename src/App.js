import "./App.css";
import { Navigation } from "./components/navigation/Navigation";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Main } from "./components/main/Main";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
