import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import StarsRating from "stars-rating";
import Compare from "./Data/CompareCars";
import web from "./images/bhp.png";

function CompareCars() {
  window.scroll(0, 770);
  window.onload = Compare;

  const [img, setImage] = useState(Compare);
  const filterImg = (id) => {
    const updatedImg = Compare.filter((curElem) => {
      if (curElem.id == id) {
        return curElem.id;
      }
    });
    setImage(updatedImg);
  };

  
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <section id="compare">
      <div className="bg-white py-5">
        <div className="container ">
          <h1 className="text-center">
            <strong className="tag px-4 py-1">COMPARE CARS</strong>
            <br></br>
          </h1>
          <h1 className="text-center pt-3">
            Easy Way To{" "}
            <span className="text-danger font-weight-bolder ">
              Compare Cars
            </span>
          </h1>

          <hr className="w-50 mx-auto text-success mb-5"></hr>
          <h2 className="text-center font-weight-bold">
            Some Popular Cars Camparsion
          </h2>

          <div className="menu-items card border-0 shadow px-4 py-4 mt-4">
            <div className="row">
              {img.map((elem) => {
                const { id, name, image, image1, description, price, rate } =
                  elem;
                return (
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <NavLink
                      to="/"
                      className="card comparecard mx-4 my-4 border-0 shadow"
                      data-target="#mymodal4"
                      data-toggle="modal"
                      onClick={() => filterImg(id)}
                    >
                      <div className="row rowspace gx-1">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 ">
                          <div className="card text-center border-0 text-decoration-none">
                            <img
                              src={image}
                              alt="menuPic"
                              className="img-fluid position-relative"
                            />

                            <div className="row rateback gx-0">
                              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="card-body text-dark float-lg-left font-weight-bold justify-content-sm-center d-flex">
                                  {name}
                                  <br></br>
                                  {price}
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12 col-12 ">
                                <h6 className="font-weight-bold text-dark justify-content-center d-flex mt-lg-3">
                                  Rating:
                                </h6>
                                <StarsRating
                                  className="float-lg-right pr-3 sliderRate justify-content-center d-flex"
                                  count={5}
                                  // onChange={ratingChanged}
                                  size={26}
                                  value={rate}
                                  edit={false}
                                  color2={"#ffd700"}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 ">
                          <div className="card text-center border-0 text-decoration-none">
                            <img
                              src={image1}
                              alt="menuPic"
                              className="img-fluid"
                            />

                            <div className="row rateback gx-0">
                              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="card-body float-lg-left text-dark font-weight-bold justify-content-sm-center d-flex">
                                  {name}
                                  <br></br>
                                  {price}
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12 col-12 rateback">
                                <h6 className="font-weight-bold justify-content-center text-dark d-flex mt-lg-3">
                                  Rating:
                                </h6>
                                <StarsRating
                                  className="float-lg-right pr-3 sliderRate justify-content-center d-flex"
                                  count={5}
                                  // onChange={ratingChanged}
                                  size={26}
                                  value={rate}
                                  edit={false}
                                  color2={"#ffd700"}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" vsicon justify-content-center d-flex align-items-center">
                          <h1 className="text-white vs px-2 py-2">Vs</h1>
                        </div>
                        <div className="arrow3 ">
                          <div className="fa fa-arrow-circle-right text-white text-center comparearrow"></div>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    
    



      <div className="modal fade " id="mymodal4">
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content bg-white">
          {Compare.map((elem) => {
            const {
              id,
              name,
              name1,
              image,
              image1,
              heading,
              description,
              price,
              link,
              exterior,
              interior,
              interior1,
              interior2,
              interior3,
              interior4,
              color1,
              color2,
              color3,
              specification,
              Engine,
              specification2,
              seat,
              feature,
              feature2,
              BHP,
              topFeatures,
              rate,
            } = elem;

            return (
              <div className="">
                <div className="modal-header">
                  <h1>
                    CARS
                    <span className="text-danger font-weight-bolder">4U</span>
                  </h1>
                  <div className="close pr-5 pt-4" data-dismiss="modal">
                    &times;
                  </div>
                </div>
                <h4 className="text-center my-4 font-weight-bold">
                  Welcome to{" "}
                  <span className="text-danger font-weight-bold">CARS4U</span>
                </h4>
                <div className="container-fluid ">
                  <div className="card border-0 shadow px-5 my-4">
                    
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                 
                  </div>
                  </div>
                  <div className="container-fluid">
                  <div className="card border-0 shadow px-5 my-5 py-4">
                    
                    <h2 className="font-weight-bold">{name} Vs {name1}</h2>
                    <h5>{description}</h5>
                 
                  </div>
                </div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-12 pb-4">
                      <div className="card border-0 shadow py-4 px-4">
                      <h4 className="font-weight-bold px-4">Basic Information</h4>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                      </div>
                      <div className="card border-0 shadow py-4 my-4 px-4">
                      <h4 className="font-weight-bold px-4">Engine and Transmission</h4>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                      </div>
                      <div className="card border-0 shadow py-4 my-4 px-4">
                      <h4 className="font-weight-bold px-4">Fuel & Performance</h4>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                      </div>
                      <div className="card border-0 shadow py-4 my-4 px-4">
                      <h4 className="font-weight-bold px-4">Suspension, Steering & Brakes</h4>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                      </div>
                      <div className="card border-0 shadow py-4 my-4 px-4">
                      <h4 className="font-weight-bold px-4">Dimensions & Capacity</h4>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                      </div>
                      <div className="card border-0 shadow py-4 my-4 px-4">
                      <h4 className="font-weight-bold px-4">Comfort & Convenience</h4>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                      </div>
                      <div className="card border-0 shadow py-4 my-4 px-4">
                      <h4 className="font-weight-bold px-4"> Interior</h4>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                      </div>
                      <div className="card border-0 shadow py-4 my-4 px-4">
                      <h4 className="font-weight-bold px-4"> Exterior</h4>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                      </div>
                      <div className="card border-0 shadow py-4 my-4 px-4">
                      <h4 className="font-weight-bold px-4"> Safety</h4>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                      </div>
                      <div className="card border-0 shadow py-4 my-4 px-4">
                      <h4 className="font-weight-bold px-4"> Entertainment & Communication</h4>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                      </div>
                      <div className="card border-0 shadow py-4 my-4 px-4">
                      <h4 className="font-weight-bold px-4">Warranty</h4>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                      </div>
                    </div>
               
                    
                      <div className="card border-0 shadow py-4 my-4 mx-3 px-4">
                      <h3 className="font-weight-bold px-4">Pros and Cons</h3>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                      </div>
                      </div>
              

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

export default CompareCars;
