import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { Menu } from './components/menu';
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <div className='container'> 
    <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App
