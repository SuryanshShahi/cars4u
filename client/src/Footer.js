import React from "react";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import "./App.css";

function Footer() {
  return (
    <section id="footer">
      <footer className="d-block fshadow">
        <img
          src="https://st2.depositphotos.com/1000423/9299/i/600/depositphotos_92992756-stock-photo-car-light-symbol.jpg"
          className="footer"
        />
        <div className="zxx pt-5">
          <div className="container-fluid justify-content-center px-lg-5 text-white">
            <div className="row list-unstyled px-lg-5">
              <div className="col-lg-3 col-md-6 col-6 pb-5">
                <strong className="fa-2x">
                  CARS<span className="text-danger font-weight-bolder">4U</span>
                </strong>
                <br></br>
                Gautam Buddha University,<br></br>Greater Noida<br></br>Pincode - 201312
              </div>
              <div className="col-lg-3 col-md-6 col-6 pb-3">
                <strong className="fa-sm">Useful Links</strong>
                <br></br>
                <NavLink to="/about" className="text-decoration-none">
                  <li className="pt-2">About</li>
                </NavLink>
                <NavLink to="/contact" className="text-decoration-none">
                  <li className="pt-2">Contact</li>
                </NavLink>
                <NavLink to="/service" className="text-decoration-none">
                  <li className="pt-2">Services</li>
                </NavLink>
                <NavLink to="/service" className="text-decoration-none">
                  <li className="pt-2">Privacy Policy</li>
                </NavLink>
                <NavLink to="/service" className="text-decoration-none">
                  <li className="pt-2">Terms of service</li>
                </NavLink>
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
                <strong className="">Newsletter</strong>
                <br></br>
                <br></br>

                <div className="justify-content-center searchbox align-content-center d-flex">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="emailInput form-control px-4 position-relative"
                  />
                  <div className="justify-content-end d-flex pr-4 pr-lg-0">
                    <div
                      className="subscribe btn text-white font-weight-light  position-absolute"
                      onClick={() =>
                        swal("", "Email Registered", "success", {
                          button: false,
                          timer: 2000,
                        })
                      }
                    >
                      Subscribe
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
          </div>

          <div className="container-fluid down px-lg-5 text-white">
            <br></br>
            <div className="float-lg-left float-sm-left px-lg-5 d-flex justify-content-center align-content-center">
              © Copyright. All Rights Reserved<br></br>
            </div>
            <div className="float-lg-right float-sm-right px-lg-5 px-md-5 px-sm-5 d-flex justify-content-center pt-3 pt-lg-0 pt-md-0 pt-sm-0">
              <a
                href="/"
                className="fa fa-facebook text-decoration-none mx-lg-1 mx-md-1 mx-1 fa-lg hello text-white text-center "
              >
                {" "}
              </a>
              <a
                href="https://github.com/SuryanshShahi"
                className="fa fa-github text-decoration-none mx-lg-1 mx-md-1 mx-1 fa-lg hello text-white text-center"
              >
                {" "}
              </a>
              <a
                href="https://twitter.com/SuryanshShahi12"
                className="fa fa-twitter text-decoration-none mx-lg-1 mx-md-1 mx-1 fa-lg hello text-white text-center"
              >
                {" "}
              </a>
              <a
                href="https://www.instagram.com/suryansh_shahi/"
                className="fa fa-instagram text-decoration-none mx-lg-1 mx-md-1 mx-1 fa-lg hello text-white text-center"
              >
                {" "}
              </a>
              <a
                href="https://www.linkedin.com/in/suryansh-shahi-42b34b177/"
                className="fa fa-linkedin text-decoration-none mx-lg-1 mx-md-1 mx-1 fa-lg hello text-white text-center"
              >
                {" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
