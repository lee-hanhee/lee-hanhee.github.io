import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import CV from './pages/CV';
import Experiences from './pages/Experiences';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/experiences" element={<Experiences />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
