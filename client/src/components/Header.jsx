import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
// import Home from "./Home";
import ContactUs from "./ContactUs";
import ReactDOM from 'react-dom/client';
import Footer from "./Footer";
import App from "../App";

var isClicked = false;

const root = ReactDOM.createRoot(document.getElementById('root'));

function handleClick(){
  isClicked = true;
  root.render(
    <React.StrictMode>
      <Header />
      <ContactUs />
      <Footer />
    </React.StrictMode>
  );  
}

function handleClickHomeButton(){
  isClicked = true;
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );  
}

export default function Header(){
  const customStyle = {
    "background-color":"transparent"
  }
    return (
      <Router>
        {/* // <div className="navbar">
        //     <h1 className="companyName">Techy Software</h1>
        //     <h3><a href="#home">Home</a></h3>
        //     <h3><a href="#services">Services</a></h3>
        //     <h3><a href="#aboutUs">About Us</a></h3>
        //     <h3><a href="#contactUs">Contact Us</a></h3>
        //     <button>Login</button>
        // </div> */}
        <nav class="navbar navbar-expand-lg bg-body-tertiary heading" style={{customStyle}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Techy Software</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="#home">Home</a> */}
          <Link to="/" onClick={handleClickHomeButton} className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#aboutUs">About Us</a>
        </li>
        <li class="nav-item">
          <Link to="/ContactUs" onClick={handleClick} className="nav-link">Contact Us</Link>
          {/* <a class="nav-link" onClick={handleClick} href="/">Contact Us</a> */}
          {console.log(isClicked)}
          <Routes>
            <Route path="/" />
            <Route path="/ContactUs" />
          </Routes>
        </li>
        <li class="nav-item loginButton">
        {/* <button type="submit" class="btn subscribeButton">Subscribe</button> */}
            <a class="nav-link loginButtonText" href="">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</Router>
    );
}

export {isClicked};