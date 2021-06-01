import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
function Contact() {
  window.scroll(0,770); 
  window.onload = Contact;
  return (
    <section  id="contact">
    <div className=" pt-5">
      <div className="container w-50 hey h-100 mt-2">
        <h2 className="text-center">
          <strong className="tag px-4 py-1">CONTACT</strong>
          <br></br>
        </h2>
        <h1 className="text-center pt-3">
          Contact <span className="text-danger font-weight-bolder">Us</span>
        </h1>
        <hr className="w-50 mx-auto text-success"></hr>
        </div>
       <div className="container pt-5">
        <iframe className="w-100 map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.894827890027!2d77.52285456477757!3d28.422430182501124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc0562d35c6eb%3A0xf28d7eccac27450f!2sGautam%20Buddha%20University%20BOYS%20HOSTEL&#39;s!5e0!3m2!1sen!2sbg!4v1621609175189!5m2!1sen!2sbg" allowfullscreen="" loading="lazy"></iframe>
        
        </div>
   

      <div className="container justify-content-center d-flex">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 pt-5">
            <div className="fa fa-map-marker fa-2x hello1 text-center"></div>
            <label className="fa-lg pl-3 font-weight-bolder">Location:</label>
            <p className="px-5">&nbsp;&nbsp;&nbsp;&nbsp;Gautam Buddha University</p>
            <br></br>
           
            <div className="fa fa-envelope fa-lg hello1 text-center"></div>
            <label className="fa-lg pl-3 pt-5 font-weight-bolder">Email:</label>
            <p className="px-5">&nbsp;&nbsp;&nbsp;&nbsp;suryansh5476@gmail.com</p>
            
            <br></br>
            <div className="fa fa-mobile-phone fa-2x hello1 text-center"></div>
            <label className="fa-lg pl-3 pt-5 font-weight-bolder">Phone:</label>
            <p className="px-5">&nbsp;&nbsp;&nbsp;&nbsp;+91 73******96</p>
            <br></br>
            </div>

          <div className="col-lg-8 col-md-8 col-sm-8">
            <div className="mx-auto py-5 w-auto px-5">
              <div className="row">
                <div className="col-lg-6 col-md-4">
                  <div class="mb-3">
                    <label for="input1" class="form-label font-weight-bold">
                      Full Name:
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="input1"
                      placeholder="Enter Full Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-4">
                  <div class="mb-3">
                    <label for="input1" class="form-label font-weight-bold">
                      Phone:
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="input1"
                      placeholder="Enter Phone No."
                    />
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="input1" class="form-label font-weight-bold">
                  Email:
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="input1"
                  placeholder="Enter Email"
                />
              </div>
              <div class="mb-3">
                <label for="textarea1" class="form-label font-weight-bold">
                  Message:
                </label>
                <textarea
                  class="form-control"
                  id="textarea1"
                  rows="3"
                ></textarea>
              </div>
              <NavLink className="btn px-4 py-2 text-white" to="/">
                Send Message
              </NavLink>
              
              </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
    </section>
  );
}

export default Contact;
