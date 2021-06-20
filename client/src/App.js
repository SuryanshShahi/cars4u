import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import About from "./About";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import PropagateLoader from "react-spinners/PropagateLoader";
import Compare from "./Compare";
import { css } from "@emotion/react";
const override = css`
  display: flex;
  justify-content:center;
  margin: 50px auto;
`;

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <section>
      <div className="app">
        {loading ? (
          <PropagateLoader size={20} color={"#e43c5c"} loading={loading} css={override}/>
        ) : (
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/service" component={Service} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/compare" component={Compare} />

              <Redirect to="/" />
            </Switch>
            <Footer />
          </div>
        )}
      </div>
    </section>
  );
};
export default App;
