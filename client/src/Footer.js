import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

function Footer() {
  return (
    <section>

      <footer className="bg-white pt-5 d-block fshadow">
        <div className="container-fluid justify-content-center px-lg-5 ">
          <div className="row list-unstyled px-lg-5">
            <div className="col-lg-3 col-md-6 col-6 pb-5">
            <strong className="fa-2x">CARS<span className="text-danger font-weight-bolder">4U</span></strong><br></br>
              Bataaunga baad me
            </div>
            <div className="col-lg-3 col-md-6 col-6 pb-3">
            <strong className="fa-sm">Useful Links</strong><br></br>
              <NavLink to="/about" className="text-decoration-none"><li className="pt-2">About</li></NavLink>
              <NavLink to="/contact" className="text-decoration-none"><li className="pt-2">Contact</li></NavLink>
              <NavLink to="/service" className="text-decoration-none"><li className="pt-2">Services</li></NavLink>
              <NavLink to="/service" className="text-decoration-none"><li className="pt-2">Privacy Policy</li></NavLink>
              <NavLink to="/service" className="text-decoration-none"><li className="pt-2">Terms of service</li></NavLink>
             
              
            </div>
            <div className="col-lg-2 col-md-6 col-6 pb-3">
            <strong className="fa-sm">Policy</strong>
              <li className="pt-2">Contact Us</li>
              <li className="pt-2">Contact Us</li>
              <li className="pt-2">Contact Us</li>
              <li className="pt-2">Contact Us</li>
              <li className="pt-2">Contact Us</li>
            </div>
            <div className="col-lg-4 col-md-6 col-6 pb-3 pr-4">
              <strong className="fa-sm">Connect</strong>
              <br></br>
              <br></br>
              <input type="email" className="form-control d-inline position-relative" placeholder="Enter Email"></input>
              
              <NavLink className="btn px-lg-4 px-auto py-2 text-white position-absolute d-inline A" to="/service">
              Subscribe
              </NavLink>
            </div>
          </div>
          <br></br>
          <br></br>
          </div>
        
        <div className="container-fluid down px-lg-5"><br></br>
        <div className="float-lg-left float-sm-left px-lg-5 font-weight-bold d-flex justify-content-center">© Copyright. All Rights Reserved<br></br>
        Designed by "..."</div>
        <div className="float-lg-right float-sm-right px-lg-5 px-md-5 px-sm-5 d-flex justify-content-center pt-3 pt-lg-0 pt-md-0 pt-sm-0">
          <a href="/" className="fa fa-facebook text-decoration-none mx-lg-1 mx-md-1 mx-1 fa-lg hello text-white text-center "></a>
          <a href="https://github.com/SuryanshShahi" className="fa fa-github text-decoration-none mx-lg-1 mx-md-1 mx-1 fa-lg hello text-white text-center"></a>
          <a href="https://twitter.com/SuryanshShahi12" className="fa fa-twitter text-decoration-none mx-lg-1 mx-md-1 mx-1 fa-lg hello text-white text-center"></a>
          <a href="https://www.instagram.com/suryansh_shahi/" className="fa fa-instagram text-decoration-none mx-lg-1 mx-md-1 mx-1 fa-lg hello text-white text-center"></a>
          <a href="https://www.linkedin.com/in/suryansh-shahi-42b34b177/" className="fa fa-linkedin text-decoration-none mx-lg-1 mx-md-1 mx-1 fa-lg hello text-white text-center"></a>
          </div>
          </div>
 
      </footer>
    </section>
  );
}

export default Footer;
