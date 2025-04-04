import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Experiences from "./pages/Experiences";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cv" element={<CV />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="project/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
