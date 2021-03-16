import React from "react";
import NaviBar from "../Shared/NaviBar";
import wordLogo from "./BriidgeWordLogo.png";
import './Homepage.css';

const Homepage = () => {
    return (
        <div>
            <NaviBar/>
            <div className="row">
                <div className="column" style={{"backgroundColor":"#0051FF"}}>
                    <img src={wordLogo} alt="Briidge Word Logo" width="700" height="700" style={{"margin":"auto", "display":"block"}}/>
                </div>
                <div className="column">
                    <h2 style={{"marginTop": 180, "marginBottom": 40}}>Who We Are</h2>
                    <p>Briidge is a revolutionary matchmaking platform that aims to bridge students and tutors together through the use of our personalised smart algorithm.</p>
                    <p>We also aim to ease information sharing between students by connecting them through our social networking platform.</p>
                    <p>
                    At briidge, we strongly believe that everyone has an equal right to high-quality education, regardless of any barrier.
                    </p>
                </div>

            </div>
        </div>
    );
};


export default Homepage;