import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import StarsRating from "stars-rating";
import Compare from "./Data/CompareCars";
import Menu from "./Data/Menu";
import web from "./images/seat.png";
import web1 from "./images/bhp.png";
import web2 from "./images/engine.png";
import web3 from "./images/thumb.png";

function CompareCars() {
  window.scroll(0, 770);
  window.onload = Compare;

  const [img, setImage] = useState(Menu);
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

  const filterImg1 = (id) => {
    const updatedImg = Menu.filter((curElem) => {
      if (curElem.id == id) {
        return curElem.id;
      }
    });
    setImage(updatedImg);
  };
  const filterImg2 = (id1) => {
    const updatedImg = Menu.filter((curElem) => {
      if (curElem.id == id1) {
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
      <div className="modal fade " id="mymodal3">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content modalcompare">
            {img.map((elem) => {
              const {
                id,
                name,
                image,
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
                    <div
                      className="close pr-lg-2 mr-lg-1 pr-md-4 pr-sm-4 pr-4 pt-4"
                      data-dismiss="modal"
                      data-target="#mymodal4"
                      data-toggle="modal"
                    >
                      &times;
                    </div>
                  </div>
                  <h4 className="text-center my-4 font-weight-bold">
                    Welcome to{" "}
                    <span className="text-danger font-weight-bold">CARS4U</span>
                  </h4>
                  <div className="container-fluid popup">
                    <div className="card border-0 shadow ">
                      <div className="row ">
                        <div className="col-lg-6 col-md-6 col-6 d-flex justify-content-center">
                          <img
                            src={image}
                            alt="menupic"
                            className="img-fluid popup"
                          />
                        </div>

                        <div className="col-lg-6 col-md-6 col-6">
                          <div className="modal-body">
                            <h5>
                              <strong>{name}</strong>
                            </h5>
                            <h5>
                              <strong>{price}</strong>
                            </h5>
                            <div className="row">
                              <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                                <div className="star">
                                  <StarsRating
                                    className="d-inline"
                                    count={5}
                                    // onChange={ratingChanged}
                                    size={26}
                                    value={rate}
                                    edit={false}
                                    color2={"#ffa236"}
                                  />
                                </div>
                                <div className="pt-2">
                                  <h6 className="d-inline pl-2 pr-2">
                                    {rate}/5
                                  </h6>
                                </div>
                              </div>
                              <div className="col-lg-9 col-md-12 col-sm-12 col-12 pt-2">
                                <a
                                  href="#rate"
                                  className="px-1 text-decoration-none ratethiscar "
                                >
                                  <b>Rate This Car</b>
                                </a>
                              </div>
                            </div>

                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <NavLink
                              to="/"
                              className="btn border-danger shadow-none"
                              data-target="#mymodal3"
                              data-toggle="modal"
                              data-dismiss="modal"
                            >
                              View Latest Offer
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid py-5">
                    <div className="row">
                      <div className="col-lg-7 col-md-12 col-12 pb-4">
                        <div className="card border-0 shadow py-4">
                          <h7 className="px-2 py-2">
                            <strong>Exterior</strong>
                          </h7>

                          <div className="exterior">
                            <video autoPlay loop muted>
                              <source src={exterior} />
                              <source src={interior} />
                            </video>
                          </div>
                          <h7 className="px-2 py-2">
                            <strong>Interior</strong>
                          </h7>
                          <div className="interior">
                            <div
                              id="carouselExampleIndicators"
                              className="carousel slide"
                              data-ride="carousel"
                            >
                              <ol className="carousel-indicators">
                                <li
                                  data-target="#carouselExampleIndicators"
                                  data-slide-to="0"
                                  className="active"
                                ></li>
                                <li
                                  data-target="#carouselExampleIndicators"
                                  data-slide-to="1"
                                ></li>
                                <li
                                  data-target="#carouselExampleIndicators"
                                  data-slide-to="2"
                                ></li>
                                <li
                                  data-target="#carouselExampleIndicators"
                                  data-slide-to="3"
                                ></li>
                              </ol>
                              <div className="carousel-inner">
                                <div className="carousel-item active">
                                  <img
                                    className="d-block w-100 img-fluid imgH"
                                    src={interior3}
                                    alt="menupic"
                                  />
                                </div>
                                <div className="carousel-item">
                                  <img
                                    className="d-block w-100 img-fluid imgH"
                                    src={interior1}
                                    alt="menupic"
                                  />
                                </div>
                                <div className="carousel-item">
                                  <img
                                    className="d-block w-100 img-fluid imgH"
                                    src={interior2}
                                    alt="menupic"
                                  />
                                </div>
                                <div className="carousel-item">
                                  <img
                                    className="d-block w-100 img-fluid imgH"
                                    src={interior4}
                                    alt="menupic"
                                  />
                                </div>
                              </div>
                              <a
                                className="carousel-control-prev"
                                href="#carouselExampleIndicators"
                                role="button"
                                data-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                              </a>
                              <a
                                className="carousel-control-next"
                                href="#carouselExampleIndicators"
                                role="button"
                                data-slide="next"
                              >
                                <span
                                  className="carousel-control-next-icon"
                                  aria-hidden="true"
                                ></span>
                              </a>
                            </div>
                          </div>
                          <h7 className="px-2 py-2">
                            <strong>Colors</strong>
                          </h7>
                          <div className="color">
                            <div
                              id="carouselExampleIndicators2"
                              className="carousel slide"
                              data-ride="carousel"
                            >
                              <ol className="carousel-indicators">
                                <li
                                  data-target="#carouselExampleIndicators2"
                                  data-slide-to="0"
                                  className="active"
                                ></li>
                                <li
                                  data-target="#carouselExampleIndicators2"
                                  data-slide-to="1"
                                ></li>
                                <li
                                  data-target="#carouselExampleIndicators2"
                                  data-slide-to="2"
                                ></li>
                              </ol>
                              <div className="carousel-inner">
                                <div className="carousel-item active">
                                  <img
                                    className="d-block w-100 img-fluid imgH"
                                    src={color1}
                                    alt="menupic"
                                  />
                                </div>
                                <div className="carousel-item">
                                  <img
                                    className="d-block w-100 img-fluid imgH"
                                    src={color2}
                                    alt="menupic"
                                  />
                                </div>
                                <div className="carousel-item">
                                  <img
                                    className="d-block w-100 img-fluid imgH"
                                    src={color3}
                                    alt="menupic"
                                  />
                                </div>
                              </div>
                              <a
                                className="carousel-control-prev"
                                href="#carouselExampleIndicators2"
                                role="button"
                                data-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon btn-dark"
                                  aria-hidden="true"
                                ></span>
                              </a>
                              <a
                                className="carousel-control-next"
                                href="#carouselExampleIndicators2"
                                role="button"
                                data-slide="next"
                              >
                                <span
                                  className="carousel-control-next-icon btn-dark"
                                  aria-hidden="true"
                                ></span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-12 col-12">
                        <div className="card border-0 shadow">
                          <div className="container py-4">
                            <h4>
                              <strong>{name} Specs, Features and Price</strong>
                            </h4>
                            {description}

                            <div className="row py-4">
                              <h4>
                                <strong>Key Specs of {name}</strong>
                              </h4>

                              <div className="col-4 py-4 pl-4">
                                <div className="row">
                                  <div className="col-5">
                                    <img src={web2} className="img-fluid"></img>
                                  </div>
                                  <div className="col-7">
                                    <h6>
                                      <strong>
                                        Engine<br></br>
                                        {Engine}
                                      </strong>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-4 py-4 pl-4">
                                <div className="row">
                                  <div className="col-4 py-2 pl-3">
                                    <img src={web1} className="img-fluid"></img>
                                  </div>
                                  <div className="col-8">
                                    <h7>
                                      <strong>
                                        BHP<br></br>
                                        {BHP}
                                      </strong>
                                    </h7>
                                  </div>
                                </div>
                              </div>
                              <div className="col-4 py-4 pl-4">
                                <div className="row">
                                  <div className="col-5">
                                    <img src={web} className="img-fluid"></img>
                                  </div>
                                  <div className="col-7">
                                    <h6>
                                      <strong>
                                        Seating Capacity<br></br>
                                        {seat}
                                      </strong>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="row">
                                  <div className="col-2">
                                    <img
                                      src={web3}
                                      className="img-fluid px-2 py-2"
                                    ></img>
                                  </div>
                                  <div className="col-10 py-4">
                                    <h6>
                                      <strong>Top Features</strong>
                                    </h6>
                                  </div>
                                </div>
                                <div className="row">
                                  <h6>{topFeatures}</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card border-0 shadow mt-4 py-4">
                      <div className="container-fluid">
                        <h4>
                          <strong>Key Specification of {name}</strong>
                        </h4>
                        <br></br>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="container px-lg-5">
                              {specification}
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="container px-lg-5">
                              {specification2}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container-fluid py-5" id="more">
                        <h4>
                          <strong>Key Features of {name}</strong>
                        </h4>
                        <br></br>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="container px-lg-5">{feature}</div>
                          </div>

                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="container px-lg-5">{feature2}</div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <h4 className=" justify-content-center d-flex font-weight-bold">
                          Rate This Car
                        </h4>
                        <div className="rating justify-content-center d-flex">
                          <div id="rate" className="star">
                            <StarsRating
                              count={5}
                              onChange={ratingChanged}
                              size={50}
                              // value={rate}
                              // edit={false}
                              color2={"#ffa236"}
                            />
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
                const {
                  id,
                  id1,
                  name,
                  name1,
                  price,
                  price1,
                  image,
                  image1,
                  description,
                  rate,
                } = elem;
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
                          <div className="card cardH text-center border-0 text-decoration-none ">
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
                          <div className="card cardH text-center border-0 text-decoration-none">
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
                id1,
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
                Cons,
              } = elem;

              return (
                <div className="">
                  <div className="modal-header">
                    <h1>
                      CARS
                      <span className="text-danger font-weight-bolder">4U</span>
                    </h1>
                    <div
                      className="close pr-lg-2 mr-lg-1 pr-md-4 pr-sm-4 pr-4 pt-4"
                      data-dismiss="modal"
                    >
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
                              data-target="#mymodal3"
                              data-toggle="modal"
                              data-dismiss="modal"
                              onClick={() => filterImg1(id)}
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
                            <NavLink
                              to="/"
                              className="text-decoration-none text-dark"
                              data-target="#mymodal3"
                              data-toggle="modal"
                              data-dismiss="modal"
                              onClick={() => filterImg2(id1)}
                            >
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
                            </NavLink>
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
                      <div className="col-lg-12 col-md-12 col-12">
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

                        <div className="card border-0 shadow-sm py-4 mt-4  px-4">
                          <h3 className="font-weight-bold">Pros and Cons</h3>
                          <div className="container-fluid py-3">
                            <ul className="nav nav-tabs">
                              <li className="active">
                                <a
                                  className="active font-weight-bolder px-2 py-2 tab rounded-0 text-decoration-none"
                                  type="button"
                                  data-toggle="tab"
                                  href="#pros"
                                >
                                  Pros
                                </a>
                              </li>
                              <li>
                                <a
                                  className="mx-3 font-weight-bolder px-2 py-2 tab rounded-0 text-decoration-none"
                                  type="button"
                                  data-toggle="tab"
                                  href="#cons"
                                >
                                  Cons
                                </a>
                              </li>
                            </ul>
                            <div className="tab-content">
                              <div id="pros" className="active tab-pane">
                                <div className="text-success py-4">{Pros}</div>
                              </div>
                              <div id="cons" className="tab-pane fade">
                                <div className="text-danger py-4">{Cons}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                     <div className="text-center py-4">
                  <div className="btn btn-danger w-75"
                    data-dismiss="modal"
                  >
                    <div className="justify-content-center align-content-center d-flex py-2 fa fa-sign-out fa-md">&nbsp;Go Back</div>
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
