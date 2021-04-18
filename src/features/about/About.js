import React from "react";
import Menu from "../../app/common/Menu";
import "../../app/css/libre.css";
import "../../app/css/about.css";
import Footer from "../nav/Footer";
import lukascarey from "../../app/img/lukascarey.jpg";

const oldPrisonCell =
  "url('https://images.unsplash.com/photo-1516958913532-21ddd9ab81d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')";

function About() {
  return (
    <React.Fragment>
      <div
        className="header page"
        style={{ backgroundImage: `${oldPrisonCell}` }}
      >
        <div className="vertical-center">
          <div className="container">
            <div className="content">
              <h1>About Me</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="single post container">
        <div className="content">
          <div className="row">
            <div className="col-xs-3">
              <img src={lukascarey} id="lukas" />
            </div>
            <div className="col-md-6">
              <div className="content-title">
                <h2>Dr. Lukas Carey</h2>
              </div>
              <div className="content-description">
                <p>
                  Nulla consequat massa quis enim. Donec pede justo, fringilla
                  vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
                  ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis
                  eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                  Vivamus elementum semper nisi. Aenean vulputate eleifend
                  tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                  eleifend ac, enim.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 profile">
            <div className="content-title">
              <h2>My Profile</h2>
            </div>
            <div className="content-description">
              <Menu />
            </div>
          </div>


        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default About;
