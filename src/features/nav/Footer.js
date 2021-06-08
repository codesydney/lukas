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
              <div className='columns'>
                <div className="col-sm-1">
                  <a className="brand" href="https://www.facebook.com/Talking-Time-with-Lukas-Alicia-105992888142880" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                </div>
                <div className="col-sm-1">
                  <a className="brand" href="https://twitter.com/time_lukas" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
                <div className="col-sm-1">
                  <a className="brand" href="https://www.linkedin.com/in/lukas-carey-598750185/" target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
                <div className="col-sm-1">
                  <a className="brand" href="https://open.spotify.com/show/6hbGK85febqdOWl3IXXSem" target="_blank">
                    <i className="fa fa-spotify"></i>
                  </a>
                </div>
                <div className="col-sm-1">
                  <a className="brand" href="https://podcasts.apple.com/au/podcast/talking-time-with-lukas-and-alicia/id1554861501" target="_blank">
                    <i className="fa fa-apple"></i>
                  </a>
                </div>
                <div className="col-sm-1">
                  <a className="brand" href="https://anchor.fm/lukas-carey" target="_blank">
                    <i className="fa fa-rss"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className='columns'>
                <div className="col-sm-6 text-right custom-text-centre">
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
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
