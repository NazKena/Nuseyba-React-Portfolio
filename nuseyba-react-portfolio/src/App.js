import React, { useState } from "react";
import Header from "./components/header";
import About from './components/about';
import Footer from "./components/footer";
import Projects from './components/project';
import './App.css';


function App() {
  const [currentTab, handleTabChange] = useState("about");

  const renderTab = () => {
    if (currentTab === "About")
    return <About/>;
    if (currentTab === "Header")
    return <Header/>;
    if (currentTab === "Projecrs")
    return <Projects/>;
    if (currentTab === "Footer")
    return <Footer/>;
  };

  return (
    <main>
      <Header currentTab={handleTabChange}/>
      {renderTab()}
      <Footer />
    </main>
  )
  }

export default App;