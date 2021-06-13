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
      <div className="header page" style={{ backgroundImage: "url(/img/library.jpg)" }}>

        <div className="vertical-center">
          <div className="container">
            <div className="content">
              <h1>Blogs</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="posts container">
        <div className="row">

          <div className="col-sm-4">{/* Card */}
            <section className="post">
              <div className="caption">
                <span className="post-tag">Blog</span>
                <h2>
                  <Link to="/blogs/details" className="post-title" target="_blank">
                    Owning Your Own Narrative
                  </Link>
                </h2>
                <p class="post-description">
                  The negative experiences of many working class academics and previously incarcerated people
                  from working class backgrounds often eat them up from the inside out. In the large part, the
                  world sees people from these backgrounds as second-class citizens and their experiences as
                  negative.
                </p>
                <a className="post-share" href="#"><i className="ion ion-android-share-alt"></i></a>
                <span className="post-date"><i className="ion ion-android-time"></i>
                  <span className="slant">
                    24 May 2021
                  </span>
                </span>
              </div>
            </section>
          </div>{/* Card End*/}

          <div className="col-sm-4">{/* Card */}
            <section className="post">
              <div className="caption">
                <span className="post-tag">Blog</span>
                <h2>
                  <Link to="/blogs/blogOne" className="post-title" target="_blank">
                    Christmas Day Inside – Own It, Don’t Let It Own You!
                  </Link>
                </h2>
                <p class="post-description">
                  So lets not bullshit here – being away for Christmas can suck, especially
                  if you are locked up. I did it, spending Christmas over 4000km away from
                  my small kids and wont lie it really hurt inside.  Not seeing them, playing
                  with them and doing the whole Santa thing stay with me today.
                  After a brief discussion around the phones in the days before Christmas a
                  few of us decided we would make it Christmas day the best day it possibly
                  could be considering where we were and where our families were.
                </p>
                <a className="post-share" href="#"><i className="ion ion-android-share-alt"></i></a>
                <span className="post-date"><i className="ion ion-android-time"></i>
                  <span className="slant">
                    8 June 2021
                  </span>
                </span>
              </div>
            </section>
          </div>{/* Card End*/}

          <div className="col-sm-4">{/* Card */}
            <section className="post">
              <div className="caption">
                <span className="post-tag">Blog</span>
                <h2>
                  <Link to="/blogs/blogTwo" className="post-title" target="_blank">
                    Developing Links With Academics From Working Class Backgrounds In Oother Countries
                  </Link>
                </h2>
                <p class="post-description">
                  Working class backgrounds, and those that have battled through them, have similarities. 
                  Their willingness to fight to survive and fight to be recognised, is second to none. 
                  More often than not those innate characteristics remain with those individuals and drive 
                  them to be focussed, compassionate and empathetic academics. Bringing as many academics 
                  with lived experience in this area from across the globe, will increase the quality and 
                  authenticity of our work, will allow for greater collaboration and will hopefully pave 
                  the way for others, from similar backgrounds, to join the rough but rewarding world of 
                  academia.
                </p>
                <a className="post-share" href="#"><i className="ion ion-android-share-alt"></i></a>
                <span className="post-date"><i className="ion ion-android-time"></i>
                  <span className="slant">
                    8 June 2021
                  </span>
                </span>
              </div>
            </section>
          </div>{/* Card End*/}

          <div className="col-sm-12 text-center">
            <a className="btn btn-default btn-round-lg btn-lg" href="#">
              Load more
          </a>
          </div>
        </div>



      </div>
    </React.Fragment>
  );
}
