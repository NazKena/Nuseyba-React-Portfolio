import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/project";
import Contact from "./components/contact";
import { Routes, Route } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;