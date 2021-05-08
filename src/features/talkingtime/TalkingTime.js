import React from "react";
import Menu from "../../app/common/Menu";
import "../../app/css/libre.css";
import "../../app/css/talkingtime.css";
import "../../app/css/home.css";
import lukascarey from "../../app/img/lukascarey.jpg";

const oldPrisonCell = "url(/img/old-prison-cell.jpg)";
const barbwire = "url(/img/hedi-benyounes.jpg)";

function TalkingTime() {
    return (
        <React.Fragment>
            <div
                className="header page"
                style={{ backgroundImage: `${barbwire}` }}
            >
                <div className="vertical-center">
                    <div className="container">
                        <div className="content">
                            <h1>Talking Time with Lukas and Alicia</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single post container">
                <div className="content">
                    <div className="row">

                        <div className="col-md-10">
                            <div className="content-title">
                                <h1>Links to Shows</h1>
                            </div>
                            <div className="content-description" >
                                <ul id='shows'>
                                    <li><a href="#">Sentencing Project</a></li>
                                    <li><a href="#">Impact Justice</a></li>
                                    <li><a href="#">Lived Experience</a></li>
                                    <li><a href="#">Convict Criminology</a></li>
                                    <li><a href="#">Life Experience</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </React.Fragment>
    );
}

export default TalkingTime;
