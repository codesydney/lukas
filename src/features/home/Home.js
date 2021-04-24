import React from "react";
import Menu from "../../app/common/Menu";
import "../../app/css/libre.css";
import "../../app/css/home.css";
import lukascarey from "../../app/img/lukascarey.jpg";

const oldPrisonCell = "url(/img/old-prison-cell.jpg)";

function Home() {
  return (
    <React.Fragment>
      <div
        className="header page"
        style={{ backgroundImage: `${oldPrisonCell}` }}
      >
        <div className="vertical-center">
          <div className="container">
            <div className="content">
              <h1 className='title'>Dr. Lukas Carey</h1>
            </div>
            <h4>Educator | Trainor | Academic</h4>
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

    </React.Fragment>
  );
}

export default Home;
