import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const ContactUs = (props) => {
  return (
    <div className="contactUs">
      {/* <Header /> */}
      <h1>Contact Us</h1>
      <form method="POST" className="contactForm">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputText">Message</label>
          <textarea
            name="feedback"
            className="form-control"
            id="exampleInputText"
            placeholder="Your valuable feedback"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {/* <Footer /> */}
    </div>
  );
};

export default ContactUs;
