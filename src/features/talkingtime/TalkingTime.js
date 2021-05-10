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
                                <h1>Spotify</h1>
                            </div>
                            <div className="content-description" >
                                <div className='shows'>
                                    <iframe src="https://open.spotify.com/embed/episode/0OQnGlAQBMJPNpFu10swPp" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                </div>
                                <div className='shows'>
                                    <iframe src="https://open.spotify.com/embed/episode/1JFdwyvaCThhdal10OFqYY" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                </div>
                                <div className='shows'>
                                    <iframe src="https://open.spotify.com/embed/episode/2TDcmIvMeOburTMMJv0tkO" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                </div>
                                <div className='shows'>
                                    <iframe src="https://open.spotify.com/embed/episode/346ALFkWzRZpfKxBeToRE6" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </React.Fragment>
    );
}

export default TalkingTime;
