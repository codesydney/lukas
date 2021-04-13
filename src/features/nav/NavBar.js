import React from "react";
import "../../app/css/libre.css";

function NavBar() {
  return (
    <React.Fragment >
      <nav maxWidth="lg" className="navbar navbar-libre navbar-absolute-top">
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
              <li >
                <a href="#">Home</a>
              </li>

              <li >
                <a href="#">About</a>
              </li>
              
              <li className="active">
                <a href="#">Contact</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
