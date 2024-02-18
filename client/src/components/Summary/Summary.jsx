import { useEffect, useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FocusLock from 'react-focus-lock'; 
import { useAuth0 } from "@auth0/auth0-react";
import { Context } from "../../utils/context";

import "./Summary.scss";
import ProgressBar from "../Dashboard/ProgressBar/ProgressBar";

import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const Summary = () => {
    const navigate = useNavigate();
    const { user, isAuthenticated } = useAuth0();
    const {setData} = useContext(Context);

    return (
        <div className="sum-content">
            <div className="wrapper">

                <div className="welcome-message">
                    <div className="msg">
                        <h1 className="v1">Results Summary</h1>
                    </div>
                    <div className="interview-btn">
                        <button className="cta" onClick={()=>{
                            navigate("/Dashboard")
                            setData(true)
                        }}>Return Home</button>
                    </div>
                </div>

                <div className="dash-content">

                    <div className="data">
                        <div className="row v1">
                            <div className="widget v2">
                                <div className="metric">
                                    <h2 className="v1">80</h2>
                                    <h2 className="v2">/ 100</h2>
                                </div>
                                <div className="title">
                                    <h1>Overall Score</h1>
                                </div>
                            </div>
                            <div className="widget v2">
                                <div className="App">
                                    <ProgressBar bgcolor={"#9999c1"} completed={85} />
                                </div>
                                <div className="title">
                                    <h1>Active Listening</h1>
                                </div>
                            </div>
                            <div className="widget v2">
                                <div className="quote">
                                    <h2><em>"Overall, you came across as a strong candidate with relevant skills and experience. I encourage you to further highlight your specific achievements and quantify your impact in future interviews."</em></h2>
                                </div>
                                <div className="title">
                                    <h1>Feedback</h1>
                                </div>
                            </div>
                        </div>

                        <div className="row v2">
                            <div className="widget v1">
                                <div className="skills">
                                    <div className="skill-title">
                                        <h2>Eye Contact</h2>
                                    </div>
                                    <div className="App">
                                        <ProgressBar bgcolor={"#9999c1"} completed={84} />
                                    </div>
                                </div>
                                <div className="skills">
                                    <div className="skill-title">
                                        <h2>Body Language</h2>
                                    </div>
                                    <div className="App">
                                        <ProgressBar bgcolor={"#7f7fb2"} completed={92} />
                                    </div>
                                </div>
                                <div className="title">
                                    <h1>Non-Verbal Communication</h1>
                                </div>
                            </div>
                            <div className="widget v1">
                                <div className="skills">
                                    <div className="skill-title">
                                        <h2>Volume</h2>
                                    </div>
                                    <div className="App">
                                        <ProgressBar bgcolor={"#9999c1"} completed={91} />
                                    </div>
                                </div>
                                <div className="skills">
                                    <div className="skill-title">
                                        <h2>Speed</h2>
                                    </div>
                                    <div className="App">
                                        <ProgressBar bgcolor={"#7f7fb2"} completed={96} />
                                    </div>
                                </div>
                                <div className="title">
                                    <h1>Verbal Communication</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;