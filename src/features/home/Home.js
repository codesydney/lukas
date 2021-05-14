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
      <div class="posts container">
        <div class="row">
          <div class="col-sm-4">
            <section class="post">
              <div class="caption">
                <span class="post-tag">Apps</span>
                <h2>
                  <a href="post-image.html" class="post-title">
                    Leave it alone
                  </a>
                </h2>
                <p class="post-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              <br />
                  <br />
              Cum sociis natoque penatibus et magnis dis parturient montes magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo <a href="#">ligula eget dolor</a>.</p>
                <a class="post-share" href="#"><i class="ion ion-android-share-alt"></i></a>
                <span class="post-date"><i class="ion ion-android-time"></i> <span class="slant">7 March 2016</span></span>
              </div>
            </section>
            <div class="post">
              <img alt="" src="img/photos/tech/unsplash-5.jpg" class="img-responsive" />
            </div>
            <section class="post">
              <div class="caption">
                <span class="post-tag">Apps</span>
                <h2><a href="post-image.html" class="post-title">Stay near your television</a></h2>
                <p class="post-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              <br />
                  <br />
                  <a href="#">Cum sociis natoque</a> penatibus et magnis dis parturient montes magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo ligula eget dolor.</p>
                <a class="post-share" href="#"><i class="ion ion-android-share-alt"></i></a>
                <span class="post-date"><i class="ion ion-android-time"></i> <span class="slant">27 January 2016</span></span>
              </div>
            </section>
          </div>
          <div class="col-sm-4">
            <section class="post">
              <img alt="" src="img/photos/tech/unsplash-6.jpg" class="img-responsive" />
              <div class="caption">
                <span class="post-tag">News</span>
                <h2><a href="post-image.html" class="post-title">Killers are calling on me</a></h2>
                <p class="post-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                <a class="post-share" href="#"><i class="ion ion-android-share-alt"></i></a>
                <span class="post-date"><i class="ion ion-android-time"></i> <span class="slant">2 March 2016</span></span>
              </div>
            </section>
            <section class="post">
              <div class="caption">
                <h2><a href="post-image.html" class="post-title">Can you tie my string?</a></h2>
                <p class="post-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              <br />
                  <br />
              Cum sociis natoque penatibus et magnis dis parturient montes magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo <a href="#">ligula eget dolor</a>.</p>
                <a class="post-share" href="#"><i class="ion ion-android-share-alt"></i></a>
                <span class="post-date"><i class="ion ion-android-time"></i> <span class="slant">16 February 2016</span></span>
              </div>
            </section>
            <section class="post">
              <img alt="" src="img/photos/tech/unsplash-1.jpg" class="img-responsive" />
              <div class="caption">
                <h2><a href="post-image.html" class="post-title">Rainbow lights in the garden</a></h2>
                <p class="post-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                <a class="post-share" href="#"><i class="ion ion-android-share-alt"></i></a>
                <span class="post-date"><i class="ion ion-android-time"></i> <span class="slant">13 January 2016</span></span>
              </div>
            </section>
          </div>
          <div class="col-sm-4">
            <section class="post">
              <div class="caption">
                <h2><a href="post-image.html" class="post-title">My angel face is falling</a></h2>
                <p class="post-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. <a href="#">Aenean massa.</a>
                  <br />
                  <br />
              Cum sociis natoque penatibus et magnis dis parturient montes magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo ligula eget dolor.</p>
                <a class="post-share" href="#"><i class="ion ion-android-share-alt"></i></a>
                <span class="post-date"><i class="ion ion-android-time"></i> <span class="slant">25 February 2016</span></span>
              </div>
            </section>
            <section class="post">
              <img alt="" src="img/photos/tech/unsplash-4.jpg" class="img-responsive" />
              <div class="caption">
                <span class="post-tag">Apps</span>
                <h2><a href="post-image.html" class="post-title">Throw out our golden arms</a></h2>
                <p class="post-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                <a class="post-share" href="#"><i class="ion ion-android-share-alt"></i></a>
                <span class="post-date"><i class="ion ion-android-time"></i> <span class="slant">8 February 2016</span></span>
              </div>
            </section>
            <section class="post">
              <div class="caption">
                <span class="post-tag">News</span>
                <h2><a href="post-image.html" class="post-title">I can waste your time</a></h2>
                <p class="post-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              <br />
                  <br />
              Cum sociis natoque penatibus et magnis dis parturient montes magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo <a href="#">ligula eget dolor</a>.</p>
                <a class="post-share" href="#"><i class="ion ion-android-share-alt"></i></a>
                <span class="post-date"><i class="ion ion-android-time"></i> <span class="slant">2 January 2016</span></span>
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
