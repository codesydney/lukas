import React from "react";
import Form from "../../app/common/Form";
import Footer from "../nav/Footer";
import "../../app/css/libre.css";
import "../../app/css/contact.css";

const oldPrisonCell =
  "url('https://images.unsplash.com/photo-1516958913532-21ddd9ab81d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')";

function Contact() {
  return (
    <React.Fragment className="About" maxWidth="lg">
      <div
        className="header page"
        style={{ backgroundImage: `${oldPrisonCell}` }}
      >
        <div className="vertical-center">
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="single post container">
        <div className="wrapper">
          <div className="title">
            <h1>Do you have a question?</h1>
          </div>
          <div className="content">
            <div className="flex-container">
              <div className="content-flex-left">
                <div className="content-title">
                  <h2>Contact Dr. Lukas Carey</h2>
                </div>
                <div className="content-message">
                  <h4>
                    For any questions, inquiries or collaboration opportunities
                    you can reach me thru email or phone.
                  </h4>
                  <h4>
                    Alternatively, you can send me a message by filling up the
                    form below.
                  </h4>
                </div>
              </div>
              <div className="content-flex-right">
                <div className="content-contact-details">
                  <div className="contact-details-box">
                    <span className='contact-details'>Phone:</span>
                    <span id='mobile-number'>0437 258 528</span>
                    <span className='contact-details'>Email:</span>
                    <span id='email'>careyss@westnet.com.au</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-container">
        <div className="flex-left">
          <div id="form-title">
            <h4>Send me a message</h4>
          </div>
          <Form />
        </div>
        <div className="flex-right">
          <img
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            className="img-responsive"
          />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
