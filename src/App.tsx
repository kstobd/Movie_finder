import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import Popular from "./pages/Popular";
import { Menu } from "./components/menu";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/popular" element={<Popular />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
