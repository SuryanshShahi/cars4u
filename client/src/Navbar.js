import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import web4 from "./images/img1.gif";
import car from "./images/car.mp4";
// import car from "./images/car.webm";
import swal from "sweetalert";
import web from "./images/seat.png";
import web1 from "./images/bhp.png";
import web2 from "./images/engine.png";
import web3 from "./images/thumb.png";
import StarsRating from "stars-rating";
import Menu from "./Data/Menu";

function Navbar() {
  const down = () => {
    window.scrollTo(0, 770);
  };

  const [heading, setHeading] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [navbar, setNavbar] = useState(false);
  const [B, setHeader] = useState(false);
  const [back, setBack] = useState(false);
  const [signin, setSignin] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
      setHeader(true);
      setBack(true);
      setSignin(true);
    } else {
      setNavbar(false);
      setHeader(false);
      setBack(false);
      setSignin(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const history = useHistory();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();

    const { fname, lname, email, phone, password, cpassword } = user;
    const res = await fetch("/SignUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fname,
        lname,
        email,
        phone,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      swal("Oops", "All fields are mandatory", "warning", {
        timer: 2200,
        buttons: false,
      });
      console.log("All fields are mandatory");
    } else if (res.status === 409) {
      swal("Oops", "Email already exists", "warning", {
        timer: 2200,
        buttons: false,
      });
      console.log("Email already exists");
    } else if (res.status === 401) {
      swal("Oops", "Password Didn't Match", "error", {
        timer: 2200,
        buttons: false,
      });
      console.log("Password Didn't Match");
    } else if (res.status === 201) {
      swal("", "SignUp Successful", "success", { timer: 2200, buttons: false });
      console.log("SignUp Successful");
    } else {
      swal("", "Invalid Credentials!", "error", {
        timer: 2200,
        buttons: false,
      });
      console.log("Invalid Credentials");
    }
  };

  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/SignIn", {
      method: "POST",
      PORT: "5000",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();
    if (res.status === 201) {
      swal("", "Signin Successful", "success", { timer: 2200, buttons: false });
      console.log("Signin Successful");
      history.push("/home");
    } else {
      swal("", "Invalid Credentials!", "error", {
        timer: 2200,
        buttons: false,
      });
      console.log("Invalid Credentials");
    }
  };

  // const [items, setItems] = useState(Search);
  const [items, setItems] = useState(Menu);
  const filterImg = (id) => {
    const updatedImg = Menu.filter((curElem) => {
      if (curElem.id === id) {
        return curElem.id;
      }
    });
    setItems(updatedImg);
  };
  const filterImg1 = (id) => {
    const updatedImg = Menu.filter((curElem) => {
      return curElem.id;
    });
    setItems(updatedImg);
  };

  const changeHeading = (e) => {
    setHeading(e.target.value);
    setSearchTerm(e.target.value);
  };

  const display = () => {
    document.getElementById("myOverlay").style.display = "block";
  };
  const show = () => {
    document.getElementById("show").style.display = "block";
  };
  const close = () => {
    document.getElementById("myOverlay").style.display = "none";
    document.getElementById("show").style.display = "none";
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <section>
      <header className="fixed-top" id="header">
        <nav
          className={
            navbar
              ? "navbar active navbar-expand-lg navbar-dark bg-dark bg-transparent"
              : "navbar navbar-expand-lg navbar-dark bg-dark bg-transparent"
          }
        >
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              CARS<span className="text-danger font-weight-bolder">4U</span>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className={
                  B
                    ? "B active navbar-nav ml-auto mb-2 mb-lg-0"
                    : "B navbar-nav ml-auto mb-2 mb-lg-0"
                }
              >
                <li className="nav-item text-decoration-none px-3 py-2">
                  <NavLink
                    method="GET"
                    activeClassName="menu_active"
                    exact
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                    href="#cars4u"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item text-decoration-none px-3 py-2">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link text-white"
                    to="/service"
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item text-decoration-none px-3 py-2">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link text-white"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item text-decoration-none px-3 py-2">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link text-white"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item text-decoration-none px-3 py-2">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link text-white"
                    to="/compare"
                  >
                    Compare Cars
                  </NavLink>
                </li>

                <li className="text-center py-1">
                  <NavLink
                    to="/"
                    className={
                      signin
                        ? "signin active text-decoration-none mx-lg-3 mx-md-3 mx-3 fa-lg btn rounded shadow-none pt-3 border-warning"
                        : "signin text-decoration-none mx-lg-3 mx-md-3 mx-3 fa-lg text-white btn btn-w rounded shadow-none bg-transparent pt-3"
                    }
                    data-target="#mymodal"
                    data-toggle="modal"
                  >
                    LogIn
                  </NavLink>
                  <NavLink
                    to="/"
                    className={
                      signin
                        ? "signin active text-decoration-none mx-lg-3 mx-md-3 mx-3 fa-lg btn rounded shadow-none pt-3 border-warning"
                        : "signin text-decoration-none mx-lg-3 mx-md-3 mx-3 fa-lg text-white btn btn-w rounded shadow-none bg-transparent pt-3"
                    }
                    data-target="#mymodal2"
                    data-toggle="modal"
                  >
                    SignUp
                  </NavLink>
                </li>
                <li>
                  <div
                    className="fa fa-search btn text-warning text-decoration-none justify-content-md-center d-flex pb-md-3 fa-lg mt-2 "
                    onClick={display}
                  ></div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="modal fade " id="mymodal">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="row C">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={web4} className="img-fluid E" alt="menupic"></img>
              </div>
              <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                <div className="modal-header">
                  <h1>
                    CARS
                    <span className="text-danger font-weight-bolder">4U</span>
                  </h1>
                  <div className="close" data-dismiss="modal">
                    &times;
                  </div>
                </div>

                <h4 className="text-center my-4 font-weight-lighter">
                  Welcome to{" "}
                  <span className="text-danger font-weight-lighter">
                    CARS4U
                  </span>
                </h4>
                <div className="modal-body">
                  <form method="POST" className="form container">
                    <label>Phone or Email:</label>
                    <input
                      value={email}
                      type="text"
                      name="email"
                      // value={login.email}
                      // onChange={handleInputs2}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control mt-1 mb-4"
                    ></input>

                    <label>Password:</label>
                    <NavLink
                      to="/"
                      className="float-right text-decoration-none"
                    >
                      Forget Password?
                    </NavLink>
                    <input
                      className="form-control mt-1 mb-4"
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      // value={login.password}
                      // onChange={handleInputs2}
                    ></input>
                    <div className=" text-center">
                      <NavLink
                        to="/"
                        onClick={loginUser}
                        className="forbtn btn text-white w-50 mt-2"
                        data-dismiss="modal"
                      >
                        Sign in
                      </NavLink>
                    </div>
                    <div className="modal-footer justify-content-center mt-5">
                      <h7>Don't have account?</h7>
                      <NavLink
                        to="/"
                        className=""
                        data-target="#mymodal2"
                        data-toggle="modal"
                        data-dismiss="modal"
                      >
                        Sign up
                      </NavLink>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="mymodal2">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="row C">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={web4} className="img-fluid D" alt="menupic"></img>
              </div>
              <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                <div className="modal-header">
                  <h1>
                    CARS
                    <span className="text-danger font-weight-bolder">4U</span>
                  </h1>
                  <div className="close" data-dismiss="modal">
                    &times;
                  </div>
                </div>

                <h4 className="text-center my-4 font-weight-lighter">
                  Welcome to{" "}
                  <span className="text-danger font-weight-lighter">
                    CARS4U
                  </span>
                </h4>
                <div className="modal-body">
                  <form method="POST" className="form container">
                    <div className="row">
                      <div className="col-lg-6 col-sm-12">
                        <label>Firstname:</label>
                        <input
                          type="text"
                          name="fname"
                          className="form-control mt-1 mb-4"
                          value={user.name}
                          onChange={handleInputs}
                        ></input>
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <label>Lastname:</label>
                        <input
                          type="text"
                          name="lname"
                          className="form-control mt-1 mb-4"
                          value={user.name}
                          onChange={handleInputs}
                        ></input>
                      </div>
                    </div>
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleInputs}
                      className="form-control mt-1 mb-4"
                    ></input>

                    <label>Phone No:</label>
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInputs}
                      className="form-control mt-1 mb-4"
                    ></input>
                    <div className="row">
                      <div className="col-lg-6 col-sm-12">
                        <label>Password:</label>
                        <input
                          className="form-control mt-1 mb-4"
                          type="password"
                          name="password"
                          value={user.password}
                          onChange={handleInputs}
                        ></input>
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <label>Confirm Password:</label>
                        <input
                          className="form-control mt-1 mb-4"
                          type="password"
                          name="cpassword"
                          value={user.cpassword}
                          onChange={handleInputs}
                        ></input>
                      </div>
                    </div>
                    <div className="text-center">
                      <NavLink
                        to="/"
                        className="forbtn btn text-white w-50 mt-2"
                        data-dismiss="modal"
                        onClick={PostData}
                      >
                        Sign Up
                      </NavLink>
                    </div>

                    <div class="row mt-5 px-5">
                      <hr className="col"></hr>
                      <div className="col-auto font-weight-bold px-2 ">OR</div>
                      <hr className="col"></hr>
                    </div>
                    <div className="col text-center py-3 justify-content-center d-flex align-items-center">
                      <a
                        href="https://mail.google.com/"
                        className="fa fa-google-plus-square fa-2x text-danger px-2"
                      ></a>
                      <h7 className="line">
                        <strong>Sign in with Google</strong>
                      </h7>
                    </div>

                    <div className="modal-footer justify-content-center mt-2">
                      <h7>Already have account?</h7>
                      <NavLink
                        to="/"
                        className=""
                        data-target="#mymodal"
                        data-toggle="modal"
                        data-dismiss="modal"
                      >
                        Sign in
                      </NavLink>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all">
        <div id="hero">
          <video autoPlay loop muted className="w-100 back">
            <source src={car} className="hero" />
          </video>
        </div>
        <div className="tagline" id="tagline">
          <div class="hero-container">
            <h1 className="text-white">Welcome To CARS4U</h1>
          </div>
          <h1 className="text-white font-weight-bolder">
            WE DELIVER WHAT WE PROMISE
          </h1>
          <h4 className="text-white pt-1">
            Think smart, feel positive, and drive extraordinary.
          </h4>

          <NavLink
            to="/"
            onClick={down}
            className="btn shadow-none text-white mt-5"
          >
            TAKE A RIDE
          </NavLink>
        </div>

        <div id="myOverlay" className="overlay">
          <div
            className="closesearch text-white justify-content-end d-flex pr-5"
            onClick={close}
            id="close"
          >
            &times;
          </div>
          <h1 className="text-center text-white">
            Search <span className="text-danger font-weight-bolder"> Cars</span>
          </h1>
          <h2 className="text-white justify-content-center align-content-center d-flex pb-3">
            {heading}
          </h2>
          <div className="mr-4">
            <div className="justify-content-center searchbox align-content-center d-flex">
              <input
                type="search"
                placeholder="Search.."
                className=" search ml-5 form-control px-4 text-white position-relative"
                onClick={show}
                onChange={changeHeading}
              />
              <div className="justify-content-end d-flex pr-4">
                <div className="fa fa-search searchbtn text-white font-weight-light position-absolute"></div>
              </div>
            </div>
            <div
              className="w-75 container pr-4 searchlist rounded mt-3 pl-4 bg-transparent"
              id="show"
            >
              {items
                .filter((elem) => {
                  if (searchTerm === "") {
                    return elem;
                  } else if (
                    elem.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return elem;
                  }
                })
                .map((elem) => {
                  const { id, name } = elem;
                  return (
                    <NavLink
                      to="/"
                      className="text-decoration-none"
                      data-target="#mymodal5"
                      data-toggle="modal"
                      onClick={() => filterImg(id)}
                    >
                      <li className=" name py-1 pl-2">{name}</li>
                    </NavLink>
                  );
                })}
            </div>
          </div>

          <div className="modal fade " id="mymodal5">
            <div className="modal-dialog modal-fullscreen">
              <div className="modal-content modalcompare">
                {items.map((elem) => {
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
                    <div className="">
                      <div className="modal-header">
                        <h1>
                          CARS
                          <span className="text-danger font-weight-bolder">
                            4U
                          </span>
                        </h1>
                        <div
                          className="close pr-lg-2 mr-lg-1 pr-md-4 pr-sm-4 pr-4 pt-4 "
                          data-dismiss="modal"
                          onClick={(e) => filterImg1(e.target.id)}
                        >
                          &times;
                        </div>
                      </div>
                      <h4 className="text-center my-4 font-weight-bold">
                        Welcome to{" "}
                        <span className="text-danger font-weight-bold">
                          CARS4U
                        </span>
                      </h4>
                      <div className="container-fluid popup">
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
                                  className="btn view border-danger shadow-none px-auto py-auto"
                                  data-dismiss="modal"
                                  onClick={(e) => filterImg1(e.target.id)}
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
                                <h7 className="px-2 pt-2">
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
                              <div className="container py-4">
                                <h4>
                                  <strong>
                                    {name} Specs, Features and Price
                                  </strong>
                                </h4>
                                {description}

                                <div className="row py-4">
                                  <h4>
                                    <strong>Key Specs of {name}</strong>
                                  </h4>

                                  <div className="col-4 py-4 pl-4">
                                    <div className="row">
                                      <div className="col-5">
                                        <img
                                          src={web2}
                                          alt="menupic"
                                          className="img-fluid"
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
                                  <div className="col-4 py-4 pl-4">
                                    <div className="row">
                                      <div className="col-4 py-2 pl-3">
                                        <img
                                          src={web1}
                                          alt="menupic"
                                          className="img-fluid"
                                        ></img>
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
                                        <img
                                          src={web}
                                          alt="menupic"
                                          className="img-fluid"
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
                                        href="#more"
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
                          <div className="container-fluid py-5" id="more">
                            <h4>
                              <strong>Key Features of {name}</strong>
                            </h4>
                            <br></br>
                            <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="container px-lg-5">
                                  {feature}
                                </div>
                              </div>

                              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="container px-lg-5">
                                  {feature2}
                                </div>
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
                        <div className="text-center py-3">
                          <div
                            className="btn btn-danger w-75"
                            data-dismiss="modal"
                            onClick={(e) => filterImg1(e.target.id)}
                          >
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
        </div>
      </div>

      <div className="backtotop container-fluid justify-content-end d-flex">
        <a
          href="#tagline"
          className={
            back
              ? "back active fa fa-arrow-up position-absolute text-decoration-none hello text-white text-center"
              : "back fa fa-arrow-up position-absolute text-decoration-none hello text-white text-center d-none"
          }
        >
          {" "}
        </a>
      </div>
    </section>
  );
}

export default Navbar;


