// import src from "*.avif";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import web from "./images/img1.gif";
import car from "./images/car.mp4";
import swal from "sweetalert";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [B, setHeader] = useState(false);
  const [back, setBack] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
      setHeader(true);
      setBack(true);
    } else {
      setNavbar(false);
      setHeader(false);
      setBack(false);
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
    // if (res.status === 422 || !data) {
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
      history.push("/");
    } else {
      swal("", "Invalid Credentials!", "error", {
        timer: 2200,
        buttons: false,
      });
      console.log("Invalid Credentials");
    }
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

                <div className="text-center">
                  <NavLink
                    to="/"
                    className="fa fa-sign-in text-decoration-none mx-lg-3 mx-md-3 mx-3 fa-lg text-warning py-3 px-1"
                    data-target="#mymodal"
                    data-toggle="modal"
                  ></NavLink>
                  <NavLink
                    to="/"
                    className="fa fa-user text-decoration-none mx-lg-3 mx-md-3 mx-3 fa-lg text-warning py-3 px-1"
                    data-target="#mymodal2"
                    data-toggle="modal"
                  ></NavLink>
                </div>
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
                <img src={web} className="img-fluid E alt"></img>
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
                    <div className="forbtn text-center">
                      <NavLink
                        to="/"
                        onClick={loginUser}
                        className="btn text-white w-50 mt-2"
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

      <div className="modal fade " id="mymodal2">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="row C">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <img src={web} className="img-fluid D alt"></img>
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
                    <div className="forbtn text-center">
                      <NavLink
                        to="/"
                        className="btn text-white w-50 mt-2"
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

          <NavLink to="/" className="btn shadow-none text-white mt-5">
            TAKE A RIDE
          </NavLink>
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
        ></a>
      </div>
    </section>
  );
}

export default Navbar;

// <h1 className="text-white">Ask before you borrow it.</h1>
