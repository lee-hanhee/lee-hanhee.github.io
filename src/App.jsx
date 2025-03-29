import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Experiences from './pages/Experiences'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container-custom py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App 