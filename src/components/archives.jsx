import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Archives() {
    return (
        <div className="archivesHome">
            <section className="archive-content-div">
                <div className="col d-flex justify-content-center" style={{marginTop: '50px', marginBottom: '50px'}}>
                    <div className="archive-container row">

                        <div className="col-md-6 col-12 text-center mb-3" id="issue-cover-div">
                            <div className="archive-front-div">
                                <Link to="/research/archives/vol1/1">
                                    <img src="/img/vol1/issue3.png" alt="issue-1-front-page" className="front-page-img"></img>
                                </Link> 

                                <div className="col-md-12 mt-3 text-center">
                                    <div className="archive-info-container">
                                        <h3>
                                            Volume 1 Issue 01 (2023): February
                                        </h3>
                                        <div className="mt-3" style={{marginLeft: '40px'}}>
                                            <p>The authors of this volume come from <b>1</b> country:</p>
                                            <p><b>Philippines (5 Articles)</b></p>
                                            <br />
                                            <p><strong>ISSN:</strong> <a href="https://portal.issn.org/resource/ISSN/2984-7176">2984-7176 (Print)</a> | <a href="https://portal.issn.org/resource/ISSN/2984-7184">2984-7184 (Online)</a></p>
                                            <p><strong>PUBLISHED:</strong> 2023-02-09</p>
                                        </div>
                                    </div>
                                </div>

                                        
                            </div>
                        </div>
                        

                        <div className="col-md-6 col-12 text-center mb-3" id="issue-cover-div">
                            <div className="archive-front-div">
                                <Link to="/research/archives/vol1/2">
                                    <img src="/img/vol1/issue2.png" alt="issue-2-front-page" className="front-page-img"></img>
                                </Link>
                                <div className="col-md-12 mt-3 text-center">
                                    <div className="archive-info-container">
                                        <h3>
                                            Volume 1 Issue 02 (2023): May
                                        </h3>
                                        <div className="mt-3" style={{marginLeft: '40px'}}>
                                            <p>The authors of this volume come from <b>1</b> country:</p>
                                            <p><b>Philippines (18 Articles)</b></p>
                                            <br />
                                            <p><strong>ISSN:</strong> <a href="https://portal.issn.org/resource/ISSN/2984-7176">2984-7176 (Print)</a> | <a href="https://portal.issn.org/resource/ISSN/2984-7184">2984-7184 (Online)</a></p>
                                            <p><strong>PUBLISHED:</strong> 2023-02-09</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 text-center mb-3" id="issue-cover-div">
                            <div className="archive-front-div">
                                <Link to="/research/archives/vol1/3">
                                    <img src="/img/vol1/issue1.png" alt="issue-3-front-page" className="front-page-img"></img>
                                </Link>
                                <div className="col-md-12 mt-3 text-center">
                                    <div className="archive-info-container">
                                        <h3>
                                            Volume 1 Issue 03 (2023): August
                                        </h3>
                                        <div className="mt-3" style={{marginLeft: '40px'}}>
                                            <p>The authors of this volume come from <b>1</b> country:</p>
                                            <p><b>Philippines (7 Articles/ 1 Dissertation)</b></p>
                                            <br />
                                            <p><strong>ISSN:</strong> <a href="https://portal.issn.org/resource/ISSN/2984-7176">2984-7176 (Print)</a> | <a href="https://portal.issn.org/resource/ISSN/2984-7184">2984-7184 (Online)</a></p>
                                            <p><strong>PUBLISHED:</strong> 2023-02-09</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 text-center mb-3" id="issue-cover-div">
                            <div className="archive-front-div">
                                <Link to="/research/archives/vol1/4">
                                    <img src="/img/vol1/issue4.png" alt="issue-4-front-page" className="front-page-img"></img>
                                </Link>
                                <div className="col-md-12 mt-3 text-center">
                                    <div className="archive-info-container">
                                        <h3>
                                            Volume 1 Issue 04 (2023): November
                                        </h3>
                                        <div className="mt-3" style={{marginLeft: '40px'}} >
                                            <p>The authors of this volume come from <b>1</b> country:</p>
                                            <p><b>Philippines (6 Articles)</b></p>
                                            <br />
                                            <p><strong>ISSN:</strong> <a href="https://portal.issn.org/resource/ISSN/2984-7176">2984-7176 (Print)</a> | <a href="https://portal.issn.org/resource/ISSN/2984-7184">2984-7184 (Online)</a></p>
                                            <p><strong>PUBLISHED:</strong> 2023-02-09</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Archives;
