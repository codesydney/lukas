import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "../../../app/css/libre.css";
import "../../../app/css/home.css";
import { Link } from "react-router-dom";

const images = [
  { url: "img/prison-hallway.jpg" },

];

export const List = () => {
  return (
    <React.Fragment>
      <div class="header page" style={{ backgroundImage: "url(/img/library.jpg)" }}>

        <div class="vertical-center">
          <div class="container">
            <div class="content">
              <h1>Blogs</h1>
            </div>
          </div>
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
