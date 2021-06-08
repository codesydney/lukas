import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from '../home/Home';
import Contact from '../contact/Contact';
import About from '../about/About';
import TalkingTime from '../talkingtime/TalkingTime';
import { Details as BlogDetails } from '../blogs/details/Details';
import { BlogOne } from '../blogs/details/BlogOne';
import { BlogTwo } from '../blogs/details/BlogTwo';
import { List as BlogList } from '../blogs/list/List';
import "../../app/css/libre.css";


function NavBar() {
  return (
    <Router>
      <nav className="navbar navbar-libre navbar-absolute-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img id="logo" />
            </a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active mobile">
                <Link to="/">Home</Link>
              </li>

              <li className="mobile">
                <Link to="/about">About</Link>
              </li>

              <li className="mobile">
                <Link to="/talkingtime">Talking Time</Link>
              </li>

              <li className="mobile">
                <Link to="/blogs">Blogs</Link>
              </li>

              

              <li className="mobile">
                <Link to="contact">Contact</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/talkingtime" exact component={TalkingTime} />
        
        <Route path="/blogs" exact component={BlogList} /> 
        <Route path="/blogs/details" exact component={BlogDetails} /> 
        <Route path="/blogs/blogOne" exact component={BlogOne} /> 
        <Route path="/blogs/blogTwo" exact component={BlogTwo} /> 
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default NavBar;
