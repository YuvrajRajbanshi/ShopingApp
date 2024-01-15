import Navbar from "./Nav/Navbar";
import Home from "./components/Pages/Home";
import { Outlet } from "react-router-dom";
import Women from "./components/Pages/Women";
import Men from "./components/Pages/Men";
import Footer from "./footer/Footer";
import Kids from "./components/Pages/Kids";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Cart from "./CartQueue/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Outlet>
        <Home />
        <Women />
        <Men />
        <Kids />
        <About />
        <Contact />
      </Outlet>
      <Footer />
      <Cart />
    </>
  );
}

export default App;
