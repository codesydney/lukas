import React from "react";
import Menu from "../../app/common/Menu";
import SimpleImageSlider from "react-simple-image-slider";
import "../../app/css/libre.css";
import "../../app/css/home.css";
import { Link } from "react-router-dom";
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
      <div class="posts container">
        <div class="row">
          <div class="col-sm-4">
            <section class="post">
              <div class="caption">
                <span class="post-tag">Blog</span>
                <h2>
                  <Link to="/blogs/details" class="post-title">
                    Leave it alone
                  </Link>
                </h2>
                <p class="post-description">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                  Aenean commodo ligula eget dolor. Aenean massa.
                  <br /><br />
                  Cum sociis natoque penatibus et magnis dis parturient montes 
                  magnis dis parturient montes, nascetur ridiculus mus. Aenean 
                  commodo <a href="#">ligula eget dolor</a>.
                </p>
                <a class="post-share" href="#"><i class="ion ion-android-share-alt"></i></a>
                <span class="post-date"><i class="ion ion-android-time"></i> 
                  <span class="slant">
                    24 May 2021
                  </span>
                </span>
              </div>
            </section>
            <div class="post">
              <img alt="" src="img/photos/tech/unsplash-5.jpg" class="img-responsive" />
            </div>


          </div>
          <div class="col-sm-4">
            <section class="post">
              <img alt="" src="img/photos/tech/unsplash-6.jpg" class="img-responsive" />
              <div class="caption">
                <span class="post-tag">Blog</span>
                <h2>
                  <Link to="/blogs/details" class="post-title">
                    Killers are calling on me
                  </Link>
                </h2>
                <p class="post-description">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
                <a class="post-share" href="#"><i class="ion ion-android-share-alt"></i></a>
                <span class="post-date">
                  <i class="ion ion-android-time"></i> 
                  <span class="slant">
                    22 May 2021
                  </span>
                </span>
              </div>
            </section>


          </div>
          <div class="col-sm-4">
            <section class="post">
              <div class="caption">
                <h2>
                  <Link to="/blogs/details" class="post-title">
                    My angel face is falling
                  </Link>
                </h2>
                <p class="post-description">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                  Aenean commodo ligula eget dolor. <a href="#">Aenean massa.</a>
                  <br />
                  <br />
                  Cum sociis natoque penatibus et magnis dis parturient montes magnis dis 
                  parturient montes, nascetur ridiculus mus. Aenean commodo ligula eget dolor.
                </p>
                <a class="post-share" href="#"><i class="ion ion-android-share-alt"></i></a>
                <span class="post-date">
                  <i class="ion ion-android-time"></i> 
                  <span class="slant">
                    20 May 2021
                  </span>
                </span>
              </div>
            </section>


          </div>

          <div class="col-sm-12 text-center">
            <a class="btn btn-default btn-round-lg btn-lg" href="#">
              Load more
          </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
