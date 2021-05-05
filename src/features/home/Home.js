import React from "react";
import Menu from "../../app/common/Menu";
import "../../app/css/libre.css";
import "../../app/css/home.css";
import lukascarey from "../../app/img/lukascarey.jpg";

const oldPrisonCell = "url(/img/old-prison-cell.jpg)";
const barbwire = "url(/img/hedi-benyounes.jpg)";

function Home() {
  return (
    <React.Fragment>
      <div
        className="header page"
        style={{ backgroundImage: `${barbwire}` }}
      >
        <div className="vertical-center">
          <div className="container">
            <div className="content">
              <h1 className='title'>Title</h1>
            </div>
            <h4>text</h4>
          </div>
        </div>
      </div>
      <div className="single post container">
        <div className="content">
          <div className="row">
            <div className="col-xs-3">
              <div>
                <img src={lukascarey} id="lukas" />
              </div>
              <div>
                <h5>Lived Experience Academic, Educator, Trainer & Coach.</h5>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-title">
              </div>
              <div className="content-description">
                <p>
                  Lukas Carey completed his Doctorate in Education and has worked in the field for most
                  of his career as a teacher, trainer, coach, educator and lived experience academic.
                  While filling a role in local government he was charged with and convicted of receiving
                  secret commissions and served time in prison. During and since Lukas’ incarceration, he
                  developed a strong interest in the role that previously incarcerated people have in the
                  development of policy and procedure and the educational opportunities provided to currently
                  and previously incarcerated people. He is a strong advocate for the importance of Convict
                  Criminology and Lived experience to provide balance to research and discussion and to
                  represent the missing voice, those that have lived incarceration.
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
