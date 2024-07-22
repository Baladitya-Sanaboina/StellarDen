import "./App.css";
import Products from "./Components/Products/index";
import NavBar from "./Components/Navbar/index";
import Home from "./Components/home/index";
import BrandStory from "./Components/BrandStory/index";
import Cart from "./Components/Cart/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/about/index";
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/Brandstory" Component={BrandStory} />
        <Route exact path="/cart" Component={Cart} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
