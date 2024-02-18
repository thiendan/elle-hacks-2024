import { useEffect, useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FocusLock from 'react-focus-lock'; 
import { useAuth0 } from "@auth0/auth0-react";
import { Context } from "../../utils/context";
import {
    Chart,
    PieSeries,
    Title
  } from '@devexpress/dx-react-chart-material-ui';

import "./Dashboard.scss";
import ProgressBar from "./ProgressBar/ProgressBar";

import { TbMoodEmpty } from "react-icons/tb";

const Dashboard = () => {
    const navigate = useNavigate();
    const { user, isAuthenticated } = useAuth0();
    const {data, setData} = useContext(Context);
    const {interviewsCompleted} = useContext(Context);
    const {handleAddInterviews} = useContext(Context);

    const {communication, setCommunication} = useContext(Context);
    const {problemSolving, setProblemSolving} = useContext(Context);
    const {agileMethod, setAgileMethod} = useContext(Context);
    const {criticalThinking, setCriticalThinking} = useContext(Context);
    const {organization, setOrganization} = useContext(Context);
    const {algorithms, setAlgorithms} = useContext(Context);
    
    const {top3, setTop3} = useContext(Context);
    const {aworst3, setWorst3} = useContext(Context);

    const com = useState("#000066");
    const prob = useState("#191975");
    const agile = useState("#323284");
    const critic = useState("#4c4c93");
    const org = useState("#6666a3");
    const algo = useState("#7f7fb2");


    // const data_c = [
    //     { argument:'Communication', value:communication},
    //     { argument:'Other', value:(1-communication) },
    //   ];


    return (
        <div>
        {isAuthenticated && <div className="main-content-dash">
            <div className="wrapper">

                <div className="welcome-message">
                    <div className="msg">
                        <h1 className="v1">Welcome back,</h1>
                        {/* <h1 className="v2">{user.name}</h1> */}
                    </div>
                    <div className="interview-btn">
                        <button className="cta" onClick={()=>{
                            navigate("/InterviewSettings")
                            setData(true)
                            handleAddInterviews(interviewsCompleted)
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
                                <div className="data">
                                    <h2>{interviewsCompleted}</h2>
                                </div>
                                {(interviewsCompleted > 1) && <div className="title">
                                    <h1>Interviews Completed</h1>
                                </div>}
                                {(interviewsCompleted == 1) && <div className="title">
                                    <h1>Interview Completed</h1>
                                </div>}
                            </div>
                            <div className="widget v1">
                                <div className="title">
                                    <h1>Progress Summary</h1>
                                </div>
                            </div>
                        </div>

                        <div className="row v2">
                            <div className="widget v2">
                                <div className="skills">
                                    <div className="skill-title">
                                        <h2>Agile Methodology</h2>
                                    </div>
                                    <div className="App">
                                        <ProgressBar bgcolor={agile} completed={agileMethod} />
                                    </div>
                                </div>
                                <div className="skills">
                                    <div className="skill-title">
                                        <h2>Critical Thinking</h2>
                                    </div>
                                    <div className="App">
                                        <ProgressBar bgcolor={critic} completed={criticalThinking} />
                                    </div>
                                </div>
                                <div className="skills">
                                    <div className="skill-title">
                                        <h2>Communication</h2>
                                    </div>
                                    <div className="App">
                                        {/* <Chart  data={data_c}> */}
                                        <ProgressBar bgcolor={com} completed={communication} />
                                    </div>
                                </div>
                                <div className="title">
                                    <h1>Top 3 Skills</h1>
                                </div>
                            </div>
                            <div className="widget v2">
                                <div className="skills">
                                    <div className="skill-title">
                                        <h2>Communication</h2>
                                    </div>
                                    <div className="App">
                                        <ProgressBar bgcolor={com} completed={communication} />
                                    </div>
                                </div>
                                <div className="skills">
                                    <div className="skill-title">
                                        <h2>Problem Solving</h2>
                                    </div>
                                    <div className="App">
                                        <ProgressBar bgcolor={prob} completed={problemSolving} />
                                    </div>
                                </div>
                                <div className="skills">
                                    <div className="skill-title">
                                        <h2>Algorithms</h2>
                                    </div>
                                    <div className="App">
                                        <ProgressBar bgcolor={algo} completed={algorithms} />
                                    </div>
                                </div>
                                <div className="title">
                                    <h1>Top 3 Skills for Improvement</h1>
                                </div>
                            </div>
                            <div className="widget v2">
                                <div className="skills">
                                    <div className="skill-title">
                                        <h2>Communication</h2>
                                    </div>
                                    <div className="App">
                                        <ProgressBar bgcolor={com} completed={communication} />
                                    </div>
                                </div>
                                <div className="skills">
                                    <div className="skill-title">
                                        <h2>Problem Solving</h2>
                                    </div>
                                    <div className="App">
                                        <ProgressBar bgcolor={prob} completed={problemSolving} />
                                    </div>
                                </div>
                                <div className="skills">
                                    <div className="skill-title">
                                        <h2>Agile Methodology</h2>
                                    </div>
                                    <div className="App">
                                        <ProgressBar bgcolor={agile} completed={agileMethod} />
                                    </div>
                                </div>
                                <div className="skills">
                                    <div className="skill-title">
                                        <h2>Critical Thinking</h2>
                                    </div>
                                    <div className="App">
                                        <ProgressBar bgcolor={critic} completed={criticalThinking} />
                                    </div>
                                </div>
                                <div className="skills">
                                    <div className="skill-title">
                                        <h2>Organization</h2>
                                    </div>
                                    <div className="App">
                                        <ProgressBar bgcolor={org} completed={organization} />
                                    </div>
                                </div>
                                <div className="skills">
                                    <div className="skill-title">
                                        <h2>Algorithms</h2>
                                    </div>
                                    <div className="App">
                                        <ProgressBar bgcolor={algo} completed={algorithms} />
                                    </div>
                                </div>
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