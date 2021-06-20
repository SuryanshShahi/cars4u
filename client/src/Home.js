import React, { useState } from "react";
import Menu from "./Data/Menu";
import swal from "sweetalert";
import Slide from "./Data/SliderCars";
import Logo from "./Data/Logo";
import Latest from "./Data/LatestCars";
import "./App.css";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import web from "./images/seat.png";
import web1 from "./images/bhp.png";
import web2 from "./images/engine.png";
import web3 from "./images/thumb.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarsRating from "stars-rating";
import Upcoming from "./Data/Upcoming";

function Home() {
  const [items, setItems] = useState(Menu);
  const [img, setImage] = useState(Menu);
  const filterItem = (categItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItems(updatedItems);
  };
  const filterImg = (id) => {
    const updatedImg = Menu.filter((curElem) => {
      if (curElem.id === id) {
        return curElem.id;
      }
    });
    setImage(updatedImg);
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
  };
  var setting = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
  };
  return (
    <section id="cars4u" className="pb-5">
      <div className="container py-5">
        <h1 className="text-center">
          <strong className="tag px-4 py-1">CARS4U</strong>
        </h1>
        <h2 className="text-center font-weight-bold py-4">
          Recommended Cars For You
        </h2>
        <div className="container bg-secondary card shadow border-0 animation">
          <div className="bg-white px-3">
            <Slider {...settings}>
              {Slide.map((elem) => {
                const { id, name, image, price, rate } = elem;
                return (
                  <NavLink
                    to="/"
                    className="text-decoration-none text-dark"
                    data-target="#mymodal3"
                    data-toggle="modal"
                    onClick={() => filterImg(id)}
                  >
                    <div className="card recommendedcard px-2 py-2 border-0 shadow rounded-0 effects"  data-bs-toggle="tooltip" title={name}>
                      <img src={image} alt="menupic1" className="img-fluid" />
                      <div className="arrow2 py-5 justify-content-center d-flex">
                        <div className="fa fa-arrow-circle-right text-white py-5"></div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="card-body float-lg-left font-weight-bold justify-content-sm-center d-flex">
                            {name}
                            <br></br>
                            {price}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <h6 className="font-weight-bold justify-content-center d-flex mt-3">
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
                  </NavLink>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      <div id="carsection" className="carsection animation">
        <div class="container pt-5">
          <h2 className="text-center font-weight-bold py-4">
            The Most Searched Cars
          </h2>
          <div className="container-fluid">
            <div className="menu-items container card border-0 shadow px-4 pb-4 ">
              <div class="row gx-5 rounded-top bg-dark tabbg mb-4">
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <ul className="nav nav-tabs justify-content-center d-flex">
                    <li className="active">
                      <a
                        className="active px-3 mt-4 hometab text-decoration-none"
                        type="button"
                        data-toggle="tab"
                        href="#all"
                        onClick={() => setItems(Menu)}
                      >
                        All
                      </a>
                    </li>
                    <li>
                      <a
                        className="mx-3 px-3 mt-4 hometab text-decoration-none"
                        type="button"
                        data-toggle="tab"
                        href="#hatch"
                        onClick={() => filterItem("hatch")}
                      >
                        Hatchback
                      </a>
                    </li>
                    <li>
                      <a
                        className="mx-3 px-3 mt-4 hometab text-decoration-none"
                        type="button"
                        data-toggle="tab"
                        href="#sedan"
                        onClick={() => filterItem("sedan")}
                      >
                        Sedan
                      </a>
                    </li>
                    <li>
                      <a
                        className="mx-3 px-3 mt-4 hometab text-decoration-none"
                        type="button"
                        data-toggle="tab"
                        href="#suv"
                        onClick={() => filterItem("suv")}
                      >
                        SUV
                      </a>
                    </li>
                    <li>
                      <a
                        className="mx-3 px-3 mt-4 hometab text-decoration-none"
                        type="button"
                        data-toggle="tab"
                        href="#muv"
                        onClick={() => filterItem("muv")}
                      >
                        MUV
                      </a>
                    </li>
                    <li>
                      <a
                        className="mx-3 px-3 my-4 hometab text-decoration-none"
                        type="button"
                        data-toggle="tab"
                        href="#luxury"
                        onClick={() => filterItem("luxury")}
                      >
                        LUXURY
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row menu-items1">
                {items.map((elem) => {
                  const { id, name, image, price, rate } = elem;
                  return (
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <NavLink
                        to="/"
                        className="card text-center carscard text-decoration-none"
                        data-target="#mymodal3"
                        data-toggle="modal"
                        data-bs-toggle="tooltip" title={name}
                        onClick={() => filterImg(id)}
                      >
                        <img src={image} alt="menuPic" className="img-fluid" />
                        <div className="arrow py-lg-5">
                          <div className="fa fa-arrow-circle-right text-white px-auto py-5"></div>
                        </div>
                        <div className="details">
                          <div className="row">
                            <h6 className="pt-2">Rating:</h6>
                            <div className="col-12 d-flex justify-content-center">
                              <StarsRating
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
                        <div className="">
                          <div className="font-weight-bolder my-2 text-dark">
                            <b>{name}</b>
                            <br></br>
                            {price}
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}

                <div className="justify-content-center d-flex align-items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Arrows_down_animated.gif"
                    className="px-1 py-2 animatedarrow img-fluid"
                    alt="menupic"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade " id="mymodal3">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content modalcompare">
            {img.map((elem) => {
              const {
                name,
                image,
                id,

                description,
                price,

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
                <div className="px-lg-3">
                  <div className="modal-header">
                    <h1>
                      CARS
                      <span className="text-danger font-weight-bolder">4U</span>
                    </h1>
                    <div
                      className="close pr-lg-2 mr-lg-1 pr-md-4 pr-sm-4 pr-4 pt-4 "
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
                    <div className="card border-0 shadow ">
                      <div className="row ">
                        <div className="col-lg-6 col-md-6 col-6 d-flex justify-content-center">
                          <img
                            src={image}
                            alt="menupic"
                            className="img-fluid popup"
                            data-bs-toggle="tooltip" title={name}
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
                                  href="#rate1"
                                  className="px-1 text-decoration-none ratethiscar"
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
                              className="btn view border-danger shadow-none py-2"
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
                  <div className="container-fluid pt-5">
                    <div className="row">
                      <div className="col-lg-7 col-md-12 col-12 pb-4">
                        <div className="card border-0 shadow py-4">
                          <h7 className="px-2 py-2">
                            <strong>Exterior</strong>
                          </h7>

                          <div className="" key={id}>
                            <div className="justify-content-center w-100 pb-4 videoBG d-flex">
                              {exterior}
                            </div>
                            <h7 className="px-2 py-2">
                              <strong>Interior</strong>
                            </h7>
                            <div className="justify-content-center pb-4 pt-1 d-flex">
                              {interior}
                            </div>
                          </div>

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
                          <div className="container py-4 justifymodal">
                            <h4>
                              <strong>{name} Specs, Features and Price</strong>
                            </h4>
                         
                            {description}
                     
                            <div className="row py-4">
                              <h4>
                                <strong>Key Specs of {name}</strong>
                              </h4>

                              <div className="col-lg-4 col-md-4 col-sm-12 py-lg-4 py-md-4 py-3 pl-4">
                                <div className="row">
                                  <div className="col-5">
                                    <img
                                      src={web2}
                                      className="img-fluid"
                                      alt="menupic"
                                    ></img>
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
                              <div className="col-lg-4 col-md-4 col-sm-12 py-lg-4 py-md-4 py-3 pl-4">
                                <div className="row">
                                  <div className="col-4 py-2 pl-3">
                                    <img
                                      src={web1}
                                      className="img-fluid"
                                      alt="menupic"
                                    ></img>
                                  </div>
                                  <div className="col-8 pl-5 pl-lg-0 pl-md-0">
                                    <h7>
                                      <strong>
                                        BHP<br></br>
                                        {BHP}
                                      </strong>
                                    </h7>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-12 py-lg-4 py-md-4 py-3 pl-4">
                                <div className="row">
                                  <div className="col-5">
                                    <img
                                      src={web}
                                      className="img-fluid"
                                      alt="menupic"
                                    ></img>
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
                                      alt="menupic"
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
                                  <a
                                    href="#more1"
                                    className="col-12 py-3 text-center text-decoration-none"
                                  >
                                    <b>+6 more</b>
                                  </a>
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
                      <div className="container-fluid py-5" id="more1">
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
                          <div id="rate1" className="star">
                            <StarsRating
                              count={5}
                              onChange={ratingChanged}
                              size={50}
                              color2={"#ffa236"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center py-3">
                      <div className="btn btn-danger w-75" data-dismiss="modal">
                        <div className="justify-content-center align-content-center d-flex py-2 fa fa-sign-out fa-md">
                          &nbsp;Go Back
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

      <div className="container py-5 animation">
        <h2 className="text-center font-weight-bold pt-5 py-4">
          Popular Brands
        </h2>
        <div className="container card border-0 shadow bg-secondary">
          <div className="container bg-white">
            <Slider {...setting}>
              {Logo.map((elem) => {
                const { image2, logoname } = elem;
                return (
                  <div className="col-2 py-4 card border-0 logocard shadow-sm rounded-0"  data-bs-toggle="tooltip" title={logoname}>
                    <div className="text-center">
                      <img
                        src={image2}
                        alt="menupic"
                        className="img-fluid pl-lg-4"
                      />
                    </div>

                    <h6 className="text-center pt-3 font-weight-bold">
                      {logoname}
                    </h6>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      <div className="Latest">
        <h2 className="text-center font-weight-bold pt-5 pb-4">Latest Cars</h2>
        <div className="container bg-secondary  card shadow border-0">
          <div className="bg-white px-3">
            <Slider {...settings}>
              {Latest.map((elem) => {
                const { id, name, image, price, rate } = elem;
                return (
                  <NavLink
                    to="/"
                    className="text-decoration-none text-dark"
                    data-target="#mymodal3"
                    data-toggle="modal"
                    onClick={() => filterImg(id)}
                  >
                    <div className="card latestcard px-2 py-2 border-0 shadow rounded-0 effects d-flex" data-bs-toggle="tooltip" title={name}>
                      <img src={image} alt="menupic1" className="img-fluid " />
                      <div className="arrow2 py-5 justify-content-center align-items-center d-flex">
                        <div className="fa fa-arrow-circle-right text-white py-5"></div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="card-body float-lg-left font-weight-bold justify-content-sm-center d-flex">
                            {name}
                            <br></br>
                            {price}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <h6 className="font-weight-bold justify-content-center d-flex mt-3">
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
                  </NavLink>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      <div className="Upcoming py-5">
        <h2 className="text-center font-weight-bold pt-5 pb-4">
          Upcoming Cars
        </h2>
        <div className="container bg-secondary card shadow border-0">
          <div className="bg-white px-3">
            <Slider {...settings}>
              {Upcoming.map((elem) => {
                const { id, name, image, price, rate } = elem;
                return (
                  <NavLink
                    to="/"
                    className="text-decoration-none text-dark"
                    onClick={() =>
                      swal("", "Available Soon", "info", {
                        buttons: false,
                        timer: 2000,
                      })
                    }
                  >
                    <div className="card px-2 py-2 upcomingcard border-0 shadow rounded-0 effects d-flex" data-bs-toggle="tooltip" key={id} title={name}>
                      <img src={image} alt="menupic1" className="img-fluid " />
                      <div className="arrow2 py-5 justify-content-center d-flex">
                        <div className="fa fa-arrow-circle-right text-white py-5"></div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="card-body float-lg-left font-weight-bold justify-content-sm-center d-flex">
                            {name}
                            <br></br>
                            {price}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <h6 className="font-weight-bold justify-content-center d-flex mt-3">
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
                  </NavLink>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
