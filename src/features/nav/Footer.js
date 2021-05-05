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
              <div className="col-sm-1">
                <a className="brand" href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
              <div className="col-sm-1">
                <a className="brand" href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </div>
              <div className="col-sm-1">
                <a className="brand" href="https://www.linkedin.com/in/lukas-carey-598750185/">
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>

              <div className="col-sm-9 text-right custom-text-centre">
                <h6>
                  Handcoded with <FavoriteIcon /> by{" "}
                  <a href="http://code.sydney/" target="_blank" style={{ color: "white", fontWeight: 'bold' }}>
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
