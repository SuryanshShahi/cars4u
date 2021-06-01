import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import StarsRating from "stars-rating";
import Compare from "./Data/CompareCars";
import Menu from "./Data/Menu"

function CompareCars() {
  window.scroll(0, 770);
  window.onload = Compare;

  const [items, setItems] = useState(Menu);
  const [Compares, setCompare] = useState(Compare);
  const filterImg = (id) => {
    const updatedImg = Compare.filter((curElem) => {
      if (curElem.id == id) {
        return curElem.id;
      }
    });
    setCompare(updatedImg);
  };

  // const filterImg1 = (id) => {
  //   const updatedItems = Menu.filter((curElem) => {
  //     if (curElem.id === id){
  //       return curElem.id;
  //     }
  //   });
  //   setItems(updatedItems);
  // };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <section id="compare">
      <div className=" py-5">
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
              {Compare.map((elem) => {
                const { id, name, name1, price, price1, image, image1, description, rate } =
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
                                  {name1}
                                  <br></br>
                                  {price1}
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
          <div className="modal-content modalcompare">
            {Compares.map((elem) => {
              const {
                id,
                name,
                name1,
                rate,
                price,
                price1,
                image,
                image1,
                description,
                fuel,
                specification,
                Engine,
                suspension,
                dimension,
                comfort,
                interior,
                exterior,
                safety,
                entertainment,
                warranty,
                Pros,
                Cons
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
                  <div className="container-fluid">
                    <div className="card border-0 shadow px-5 my-4 w-100">
                    
                    <div className="container">
                        <div className="row py-4">
              
                        <div className="col-lg-5 col-md-5 col-sm-5 col-5 ">
                          
                          <NavLink
                          to="/"
                          className="text-decoration-none text-dark"
                          data-target="#mymodal4"
                          data-toggle="modal"
                          onClick={() => filterImg(id)}
                        >
                              <div className="card comparecard shadow text-center border-0 text-decoration-none">
                              <img
                                src={image}
                                alt="menuPic"
                                className="img-fluid position-relative"
                              />
                             
                              
                                <div className="arrow3 ">
                                  <div className="fa fa-arrow-circle-right text-white text-center comparearrow"></div>
                                </div>
                              
                              <div className="row rateback gx-0">
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                  <div className="card-body text-dark font-weight-bold justify-content-sm-center d-flex">
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
                                    className=" sliderRate justify-content-center d-flex"
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
                            </NavLink>
                         
                          </div>
                       
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2 justify-content-center d-flex">
                            <div className=" vsicon justify-content-center d-flex align-items-center">
                              <h1 className="text-white vs px-2 py-2">Vs</h1>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <div className="card shadow comparecard text-center border-0 text-decoration-none">
                              <img
                                src={image1}
                                alt="menuPic"
                                className="img-fluid"
                              />
                              <div className="arrow3 ">
                                <div className="fa fa-arrow-circle-right text-white text-center comparearrow"></div>
                              </div>
                              <div className="row rateback gx-0">
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                  <div className="card-body text-dark font-weight-bold justify-content-sm-center d-flex">
                                    {name1}
                                    <br></br>
                                    {price1}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12 rateback">
                                  <h6 className="font-weight-bold justify-content-center text-dark d-flex mt-lg-3">
                                    Rating:
                                  </h6>
                                  <StarsRating
                                    className=" sliderRate justify-content-center d-flex"
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
                          
                        </div>
                      </div>
                
                    </div>
                    
                  </div>
                  <div className="container">
                    <div className="card border-0 shadow-sm px-5 my-5 py-4">
                      <h2 className="font-weight-bold">
                        {name} Vs {name1}
                      </h2>
                      <h5>{description}</h5>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-12 pb-4">
                        <div className="card border-0 shadow-sm py-4 px-4">
                          <h4 className="font-weight-bold"></h4>

                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-4">
                                <h5 className="font-weight-bold">
                                  {" "}
                                  Basic Information
                                </h5>
                              </div>
                              <div className="col-4">
                                <h5 className="text-center font-weight-bold">
                                  RXZ EASY-R AMT Dual Tone
                                </h5>
                              </div>
                              <div className="col-4">
                                <h5 className="text-center font-weight-bold float-right">
                                  ZXI AMT 1.2
                                </h5>
                              </div>
                            </div>
                          </div>

                          <div className="container-fluid py-3">
                            <div className="">{specification}</div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-sm py-4 my-4 px-4">
                          <h4 className="font-weight-bold">
                            Engine and Transmission
                          </h4>

                          <div className="container-fluid py-3">
                            <div className="">{Engine}</div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-sm py-4 my-4 px-4">
                          <h4 className="font-weight-bold">
                            Fuel & Performance
                          </h4>
                          <div className="container-fluid py-3">
                            <div className="">{fuel}</div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-sm py-4 my-4 px-4">
                          <h4 className="font-weight-bold">
                            Suspension, Steering & Brakes
                          </h4>
                          <div className="container-fluid py-3">
                            <div className="">{suspension}</div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-sm py-4 my-4 px-4">
                          <h4 className="font-weight-bold">
                            Dimensions & Capacity
                          </h4>
                          <div className="container-fluid py-3">
                            <div className="">{dimension}</div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-sm py-4 my-4 px-4">
                          <h4 className="font-weight-bold">
                            Comfort & Convenience
                          </h4>
                          <div className="container-fluid py-3">
                            <div className="">{comfort}</div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-sm py-4 my-4 px-4">
                          <h4 className="font-weight-bold"> Interior</h4>
                          <div className="container-fluid py-3">
                            <div className="">{interior}</div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-sm py-4 my-4 px-4">
                          <h4 className="font-weight-bold"> Exterior</h4>
                          <div className="container-fluid py-3">
                            <div className="">{exterior}</div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-sm py-4 my-4 px-4">
                          <h4 className="font-weight-bold"> Safety</h4>
                          <div className="container-fluid py-3">
                            <div className="">{safety}</div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-sm py-4 my-4 px-4">
                          <h4 className="font-weight-bold">
                            {" "}
                            Entertainment & Communication
                          </h4>
                          <div className="container-fluid py-3">
                            <div className="">{entertainment}</div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-sm py-4 my-4 px-4">
                          <h4 className="font-weight-bold">Warranty</h4>
                          <div className="container-fluid py-3">
                            <div className="">{warranty}</div>
                          </div>
                        </div>

                        <div className="card border-0 shadow-sm py-4 my-4  px-4">
                          <h3 className="font-weight-bold">Pros and Cons</h3>
                          <div className="container-fluid py-3">
                          <div className="text-success">{Pros}</div>
                          <div className="text-danger">{Cons}</div>
                        </div>
                        </div>
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
