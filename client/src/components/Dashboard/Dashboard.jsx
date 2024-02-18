import { useEffect, useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FocusLock from 'react-focus-lock'; 
import { useAuth0 } from "@auth0/auth0-react";
import { Context } from "../../utils/context";

import "./Dashboard.scss";

import { TbMoodEmpty } from "react-icons/tb";

const Dashboard = () => {
    const navigate = useNavigate();
    const { user, isAuthenticated } = useAuth0();
    const {data, setData} = useContext(Context);

    return (
        <div>
        {isAuthenticated && <div className="main-content-dash">
            <div className="wrapper">

                <div className="welcome-message">
                    <div className="msg">
                        <h1 className="v1">Welcome back {user.name}! </h1>
                        {/* <h1 className="v2">{user.name}</h1> */}
                    </div>
                    <div className="interview-btn">
                        <button className="cta" onClick={()=>{
                            navigate("/InterviewSettings")
                            setData(true)
                        }}>Start Interview</button>
                    </div>
                </div>

                <div className="dash-content">
                    {!(data) && <div className="no-data">
                        <TbMoodEmpty className="icon"/>
                        <h2>Start an interview to see statistics</h2>
                    </div>}

                    {data && <div className="data">
                        <div className="row v1">
                            <div className="widget v1">
                                <div className="title">
                                    <h1>Interviews Completed</h1>
                                </div>
                            </div>
                            <div className="widget v1">
                                <div className="title">
                                    <h1>Progress Summary</h1>
                                </div>
                            </div>
                        </div>

                        <div className="row v2">
                            <div className="widget v2">
                                <div className="title">
                                    <h1>Top 5 Skills</h1>
                                </div>
                            </div>
                            <div className="widget v2">
                                <div className="title">
                                    <h1>Top 5 Skills for Improvement</h1>
                                </div>
                            </div>
                            <div className="widget v2">
                                <div className="title">
                                    <h1>Skill Proficiency</h1>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>

            </div>
        </div>}
        </div>
    );
};

export default Dashboard;