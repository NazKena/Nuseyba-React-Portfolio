import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/project";
import Contact from "./components/contact";
import { Routes, Route, Router } from "react-router-dom";
import "./App.css";



function App() {
  return (
    <div className="App">
    <Router basename="nuseyba-react-portfolio">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
    </Router>  
    </div>
  );
}

export default App;