import Header from "./components/Header";
import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer';
import AboutUs from "./components/AboutUs";
// import { Router } from "express";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ContactUs from "./components/ContactUs";
import {isClicked} from "./components/Header";
// var isClicked = false;

// function handleClick(){
  // isClicked = true;
// }

function App() {
  return (
    <div> 
      <Header />
      <Home />
      <Services />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
