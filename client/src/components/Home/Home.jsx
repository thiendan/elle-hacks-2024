import { useEffect, useState, useContext, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import FocusLock from 'react-focus-lock'; 
import { useAuth0 } from "@auth0/auth0-react";

import "./Home.scss";

import { RiSpeakLine } from "react-icons/ri";
import { MdOutlineAccessibility } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";

import img1 from "../../assets/hm-img1.jpg";
import img2 from "../../assets/img2.png";
import demo from "../../assets/demo.png";

const Home = () => {
    const navigate = useNavigate();
    const { loginWithRedirect } = useAuth0();
    const { isAuthenticated } = useAuth0();

    return (
        <div>
        {!(isAuthenticated) && <div className="main-content-home">
            <div className="home-content">

                <div className="title-banner">
                    <div className="section-title-home">
                        <h1>PELICAN</h1>
                        <p><em>empowering families one meal at a time.</em></p>
                    </div>
                    <div className="section-img">
                        <img src={img1} alt=""/>
                    </div>
                </div>

                <div className="about-banner">
                    <div className="section-title-about">
                        <div className="title">
                            <h1>State of the art interview software</h1>
                        </div>
                        <div className="desc">
                            <p>Empowering candidates to ace their interviews with personalized AI coaching.</p>
                            <p>We are a company transforming the way candidates prepare for interviews. Our innovative AI-powered software provides realistic practice simulations and personalized feedback, equipping users with the confidence and skills to excel in any interview setting.</p>
                        </div>
                    </div>
                    <div className="section-content">
                        <div className="video">
                            <img src={demo} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="keyBenefits-banner">
                    <div className="section-title-kb">
                        <h1>Key Benefits</h1>
                    </div>
                    <div className="section-content">
                        <div className="benefit">
                            <RiSpeakLine className="icon"/>
                            <h1>Simulated Interview Experience</h1>
                            <p>In the zargonian plains of Zog, glitcherflies flounced by the blorpful bogs, their luminescent antennae aglow. Flibberty flurps frolicked in the quagmire, singing whimsically of frumious bandersnatch and jubjub birds..</p>
                        </div>
                        <div className="benefit">
                            <MdOutlineAccessibility className="icon"/>
                            <h1>Simulated Interview Experience</h1>
                            <p>In the zargonian plains of Zog, glitcherflies flounced by the blorpful bogs, their luminescent antennae aglow. Flibberty flurps frolicked in the quagmire, singing whimsically of frumious bandersnatch and jubjub birds..</p>
                        </div>
                        <div className="benefit">
                            <VscFeedback className="icon"/>
                            <h1>Personalized Feedback</h1>
                            <p>In the zargonian plains of Zog, glitcherflies flounced by the blorpful bogs, their luminescent antennae aglow. Flibberty flurps frolicked in the quagmire, singing whimsically of frumious bandersnatch and jubjub birds..</p>
                        </div>
                    </div>
                </div>

                <div className="signup-banner">
                    {/* <div className="section-content-su">
                        <img src={img2} alt=""/>
                    </div> */}
                    <div className="section-title-su">
                        <div className="title">
                            <h1>Smart Interview Software to Boost your Confidence</h1>
                        </div>
                        <div className="desc">
                            <p>Made by Students. For the Students.</p>
                        </div>
                    </div>
                    <button className="cta" onClick={() => {
                            loginWithRedirect()
                    }}>Sign Up</button>
                </div>

            </div>
        </div>}
        {isAuthenticated && navigate("/Dashboard")}
        </div>
    );
};

export default Home;