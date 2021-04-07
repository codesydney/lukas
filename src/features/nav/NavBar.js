import React from "react";
import "../../app/css/libre.css";

function NavBar() {
  return (
    <React.Fragment className="App" maxWidth="lg">
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
            <a className="navbar-brand" href="index.html">
              <i className="ion ion-aperture spin-on-hover"></i>
            </a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Research <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="home-travel.html">Media Appearance</a>
                  </li>
                  <li>
                    <a href="home-space.html">Podcast</a>
                  </li>
                  <li className="divider"></li>
                </ul>
              </li>
              <li className="active">
                <a href="page-about.html">About</a>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blogs
                </a>
                
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Docs <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="doc-typography.html">CV</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="page-contact.html">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </React.Fragment>
  );
}

export default NavBar;
