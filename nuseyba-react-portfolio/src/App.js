import Header from "./components/header";
import About from './components/about';
import Footer from "./components/footer";
import Projects from './components/project';
import './App.css';

const styles = {
  backgroundColour: "#C8ADC0",

}
function App() {

  return (
    <>
    <Header/>
    <About/>
    <Footer/>
    <Projects/>
   </>
  )
  }

export default App;