import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from '../about/About';
import Contact from '../contact/Contact';
import Home from '../home/Home';
import "../../app/css/libre.css";

function NavBar() {
  return (
    <Router>
      <nav className="navbar navbar-libre navbar-absolute-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <i className="ion ion-aperture spin-on-hover"></i>
            </a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <Link to="home">Home</Link>
              </li>

              <li>
                <Link to="about">About</Link>
              </li>

              <li >
                <Link to="contact">Contact</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default NavBar;
