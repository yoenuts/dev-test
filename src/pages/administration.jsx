import React from "react";
import { Link, useParams } from "react-router-dom";
import '../App.css';


function Administration () {

    const { admin } = useParams();

    let imgPath, message, imgAlt, pageTitle;

    switch(admin) {
        case 'president':
            pageTitle = 'Message of the President';
            imgPath = '/img/president.png';
            message = (
                <div className="col-md-7 align-items-center justify-content-center ">
                    <div className="adminMessage mt-5" >
                        <div className="row">
                            <h4 style={{textAlign: 'center'}}>
                                <q>
                                    As the world grows increasingly interconnected, interactions become more important than ever. Thus, learning a second language promotes self-improvement, comfort, and confidence in connecting to the multicultural world.
                                    Guild of Educators in TESOL International Institute is established to offer courses and trainings that give a competitive advancement in your chosen career and increase your opportunities to develop marketable skills in the global economy. The GET International Institute is dedicated to assisting professionals across disciplines. Let us be partners in pursuing your countless opportunities.
                                </q>
                                
                            </h4>
                        </div>
                        <div className="row">
                            <div className="col mt-5">
                                <p style={{ textAlign: 'right', fontWeight: '500',color: '#2b69af'}}>
                                    - GINA SY LUNA, EDD – PRESIDENT
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            );
            imgAlt = 'President';

            break;
        case 'vicepresident':
            pageTitle = 'Message of the Vice President for International Linkages and Research Publication';
            imgPath = '/img/vicePresident.png';
            imgAlt = 'Vice President'
            message = (
                <div className="col-md-7 flex-column align-items-center justify-content-center mt-3">
                        <div className="adminMessage mt-5"> 

                            <div className="row">

                                <h4>
                                    <q>
                                        Nothing has never been more powerful in transforming one’s life than education. With this, allow us, the Guild of Educators in TESOL International to be your instrument of transformation.
                                        The courses and trainings we offer to our clients, professionals and students alike from diverse disciplines, provide great career advantage as it is our utmost goal to help you in achieving countless opportunities.
                                    </q>
                                </h4>
                            </div>

                            <div className="row">
                                <div className="col mt-5">
                                    <p style={{ textAlign: 'right', fontWeight: '500',color: '#2b69af'}}>
                                        - DEBBIE ACAB, EDD (CAND.) VICE PRESIDENT FOR CURRICULUM AND INSTRUCTION
                                    </p>
                                </div>
                            </div>

                        </div>


                </div>
            );
            break;
        default:
            message = 'refresh pls';
            break;

    }

    return(
        <div className="Administration">
            <div className="administration row">
                <h1 className="mt-5">{pageTitle}</h1>
                <hr></hr>
                <div className="row mt-4 mb-5">
                    <div className="col-md-5 d-flex align-items-center justify-content-end">
                        <img src={imgPath} alt={imgAlt}></img>
                    </div>
                    {message}

                </div>
            </div>
        </div>
        
    );
}

export default Administration;