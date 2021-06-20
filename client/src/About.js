import React from "react";

function About() {
  window.scroll(0, 770);
  window.onload = About;
  return (
    <section id="about">
      <div className="pt-5">
        <div className="container ">
          <h1 className="text-center">
            <strong className="tag px-4 py-1">ABOUT</strong>
            <br></br>
          </h1>
          <h1 className="text-center pt-3">
            Learn More{" "}
            <span className="text-danger font-weight-bolder">About Us</span>
          </h1>

          <hr className="w-50 mx-auto text-success"></hr>

          <div className="container py-5 px-5 animation">
            <div className="card border-0 shadow-sm mx-5 px-5 pt-4 mb-4">
              <p className="justifymodaldes pb-5">
                This website is developed only as a part of my project work in
                which i had tried to implement maximum features to enhance the
                user interaction. I have developed this website with a goal of
                implementing & showcasing my skills in an innovative way.
              </p>
              <div className="lower justify-content-center d-flex">
                <strong className="text-danger">
                  <h5 className="font-weight-bold py-5">
                    {" "}
                    This website is not published for any business purpose, it
                    is just a demo project.
                  </h5>
                </strong>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
