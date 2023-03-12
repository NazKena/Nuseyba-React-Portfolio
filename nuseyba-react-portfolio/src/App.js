import Header from "./components/header";
import About from './components/about';
import Footer from "./components/footer";
import Projects from './components/project';
import './App.css';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <About/> } />
        <Route path="header" element={ <Header/> } />
        <Route path="projects" element={ <Projects/> } />
        <Route path="footer" element={ <Footer/> } />
      </Routes>
    </div>
  )
}

export default App