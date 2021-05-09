import React from "react";
import Menu from "../../app/common/Menu";
import SimpleImageSlider from "react-simple-image-slider";
import "../../app/css/libre.css";
import "../../app/css/home.css";
//import unsplash2 from "../../app/img/travel/unsplash-1.jpg";

const oldPrisonCell = "url(/img/old-prison-cell.jpg)";
const barbwire = "url(/img/hedi-benyounes.jpg)";

const images = [
  { url: "img/prison-hallway.jpg" },
 
];

function Home() {
  return (
    <React.Fragment>
      <div className="intro">

        <div className="container">
          <div className="content">
            <div className="row">
              <div className="col-md-7">

                <div className="vertical-center">
                  <span className="intro-head">Latest posts</span>
                  <a className="slider-link" href="#">
                    <h1 className="slider-caption" >My angel face is falling, feathers are falling on my feet</h1>
                  </a>
                  <a className="prev">
                    <i className="ion ion-chevron-left"></i>
                  </a>
                  <a className="next">
                    <i className="ion ion-chevron-right"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="intro-slider">
          <SimpleImageSlider
            bgColor={'#60758C'}
            width={'inherit'}
            height={'inherit'}
            images={images}
          >
            <div>hello</div>
          </SimpleImageSlider>
        </div>

      </div>
      <div className="container"></div>
    </React.Fragment>
  );
}

export default Home;
