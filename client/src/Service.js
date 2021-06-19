import React from "react";
import Logo from "./Data/Logo";

function Service() {
  window.scroll(0, 770);
  window.onload = Service;

  return (
    <section id="service">
      <div className=" pt-5">
        <div className="container">
          <h1 className="text-center">
            <strong className="tag px-4 py-1">SERVICES</strong>
          </h1>
          <h1 className="text-center pt-3">
            We do offer awesome{" "}
            <span className="text-danger font-weight-bolder">Services</span>
          </h1>
          <hr className="w-50 mx-auto text-success"></hr>
        </div>

        <div className="container animation">
          <div className="row py-5 ">
            <div className="col-lg-3 col-sm-6 col-12 pb-4">
              <div className="card cardhover shadow text-center py-4">
                <div className="fa fa-flag pb-3  fasize"></div>
                <h6 className="font-weight-bolder fa-lg ">India's #1</h6>
                <h6>Largest Auto Portal</h6>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 pb-4">
              <div className="card cardhover shadow text-center py-4">
                <div className="fa fa-car fasize pb-3"></div>
                <h6 className="font-weight-bolder fa-lg ">Car Sold</h6>
                <h6>Every 4 minute</h6>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 pb-4">
              <div className="card cardhover shadow text-center py-4">
                <div className="fa fa-tags pb-3 fasize"></div>
                <h6 className="font-weight-bolder fa-lg ">Offers</h6>
                <h6>Stay Updated pay less</h6>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 pb-4">
              <div className="card cardhover shadow text-center py-4">
                <div className="two justify-content-center d-flex pt-1 pb-4">
                  <div className="fa fa-car pb-3 facar mr-5 pr-3 position-absolute"></div>
                  <div className="fa fa-car pb-3 facar position-absolute pl-2 ml-5"></div>
                </div>
                <h6 className="font-weight-bolder fa-lg pt-5">Compare</h6>
                <h6>Decode the right car</h6>
              </div>
            </div>
          </div>

          <div className="row py-5">
            <h2 className="text-center font-weight-bold pb-5">
              Popular Brands
            </h2>
            {Logo.map((elem) => {
              const { image2, logoname } = elem;
              return (
                <div className="col-lg-3 col-sm-6 col-12 pb-4">
                  <div
                    className="card smallcard shadow border-0 rounded-0 text-center pb-1 pt-3"
                    data-bs-toggle="tooltip"
                    title={logoname}
                  >
                    <div className="text-center">
                      <img src={image2} alt="menupic" className="img-fluid" />
                    </div>

                    <h6 className="text-center pt-3 font-weight-bold">
                      {logoname}
                    </h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
