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
                  <span className="intro-head">Quote</span>
                  <a className="slider-link" href="#">
                    <h1 className="slider-caption" >
                      We need to stop
                      just pulling people
                      out of the river.
                    </h1>
                    <h1 className="slider-caption" >
                      We need to go upstream and find
                      out why they're
                      falling in.
                    </h1>
                    <h3>- Desmond Tutu</h3>
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
                  <Link to={`/blogs/details`} class="post-title">
                    Owning Your Own Narrative
                  </Link>
                </h2>
                <p class="post-description">
                  The negative experiences of many working class academics and previously incarcerated people
                  from working class backgrounds often eat them up from the inside out. In the large part, the
                  world sees people from these backgrounds as second-class citizens and their experiences as
                  negative.
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
