import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CV from "./pages/CV";
import Experiences from "./pages/Experiences";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/experiences" element={<Experiences />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
