import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "../../app/css/libre.css";

function Footer() {
  return (
    <React.Fragment>
      <footer id="footer">
        <div id="links">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <a className="brand" href="index.html">
                  <i className="ion ion-aperture spin-on-hover"></i>
                </a>
              </div>

              <div className="col-sm-10 text-right custom-text-centre">
                <h6>
                  Handcoded with <FavoriteIcon /> by{" "}
                  <a href="http://code.sydney/" style={{ color: "white", fontWeight: 'bold' }}>
                    Code.Sydney
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
