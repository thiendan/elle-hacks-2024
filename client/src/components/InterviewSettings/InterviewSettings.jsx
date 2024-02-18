import { useEffect, useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FocusLock from 'react-focus-lock'; 
import { useAuth0 } from "@auth0/auth0-react";
import { Context } from "../../utils/context";

import "./InterviewSettings.scss";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";

import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const InterviewSettings = () => {
    const navigate = useNavigate();
    const { user, isAuthenticated } = useAuth0();
    const {data, setData} = useContext(Context);
    const [collapse, setCollapse] = useState(true);

    return (
        <div className="IS-content">
            <div className="content">
                <div className="title">
                    <h1>Modify Preferences</h1>
                </div>
                <div className="setting-features">
                    <div className="main">
                        <div className="option">
                            <h1>Type</h1>
                            <select>
                                <option value="someOption">Software Developer</option>
                                <option value="otherOption">Product Management</option>
                            </select>
                        </div>
                        <div className="option">
                            <h1>Stage</h1>
                            <select>
                                <option value="someOption">Some option</option>
                                <option value="otherOption">Other option</option>
                            </select>
                        </div>
                        <div className="option">
                            <h1>Length (in minutes)</h1>
                            <select>
                                <option value="15">15</option>
                                <option value="30">30</option>
                                <option value="45">45</option>
                                <option value="60">60</option>
                            </select>
                        </div>
                        <div className="input option">
                            <div className="cv">
                                <h1>Insert CV/Resume:</h1>
                                <textarea type="text"/>
                            </div>
                            <div className="cv">
                                <h1>Insert Job Description</h1>
                                <textarea type="text"/>
                            </div>
                        </div>
                    </div>
                    {collapse && <div className="accessibility">
                        <div className="title" onClick={()=>setCollapse(false)}>
                            <RiArrowDropUpLine className="icon"/>
                            <h1>Accessibility Settings</h1>
                        </div>
                    </div>}
                    {!collapse && <div className="accessibility">
                        <div className="title" onClick={()=>setCollapse(true)}>
                            <RiArrowDropDownLine className="icon"/>
                            <h1>Accessibility Settings</h1>
                        </div>
                        <div className="option">
                            <h1>Color Blindness Setting</h1>
                            <ToggleSwitch/>
                        </div>
                        <div className="option">
                            <h1>Closed Captions</h1>
                            <ToggleSwitch/>
                        </div>
                        <div className="option">
                            <h1>Blind Settings</h1>
                            <ToggleSwitch/>
                        </div>
                    </div>}
                </div>
                <div className="btn">
                    <button className="cta v1" onClick={() => {
                        navigate("/Interview")
                        }}>Start Interview</button>
                </div>
            </div>
        </div>
    );
};

export default InterviewSettings;