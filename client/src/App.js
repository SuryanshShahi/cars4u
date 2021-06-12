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
import ClipLoader from "react-spinners/ClipLoader";
import Compare from "./Compare";


const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <section>
      <div className="app">
        {loading ? (
          <ClipLoader size={100} color={"#4A90E2"} loading={loading} />
        ) : (
          <div>
            <Navbar />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/service" component={Service} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/compare" component={Compare} />

              
            </Switch>
            <Footer />
          </div>
        )}
      </div>
    </section>
  );
};
export default App;
