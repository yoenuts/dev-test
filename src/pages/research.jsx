import React, { useEffect, useState } from "react";
import '../App.css';
import { useAuth } from "../Context/AuthContext";
import { Link, useParams } from "react-router-dom";
import Archives from "../components/archives";
import AboutJournal from "../components/aboutJournal";
import Information from "../components/information";
import ResearchHome from "../components/research-home";
import ResearchHeader from "../components/research-header.jsx";


function Research() {

    const { section } = useParams();

    let content;

    switch(section) {
        case 'archives':
            content = <Archives />
            break;
        case 'aboutJournal':
            content = <AboutJournal />
            break;
        case 'information':
            content = <Information />
            break;
        default:
            content = <ResearchHome />
            break;
    }

    return (
        <div className="research">
            <ResearchHeader />
            {content}
        </div>
    );
}

export default Research;