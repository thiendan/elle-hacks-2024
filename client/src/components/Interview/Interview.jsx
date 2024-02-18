import { useEffect, useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FocusLock from 'react-focus-lock'; 
import { useAuth0 } from "@auth0/auth0-react";
import { Context } from "../../utils/context";

import "./Interview.scss";

import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const Interview = () => {
    const navigate = useNavigate();
    // const {playing, setPlaying} = useContext(Context);
    const videoRef = useRef(null);

    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: { width: 300, height: 150 } })
            .then(stream => {
                videoRef.current.srcObject = stream; // Assign stream to video element
                videoRef.current.play();
            })
            .catch(err => {
                console.error(err);
            });
    };

    useEffect(() => {
        getVideo();
    }, [videoRef.current])
    
    
    return (
        <div className="IN-content">
            <div className="content">

                <div className="screen">
                    <div className="person-screen">
                        <video ref={(videoRef)}></video>
                    </div>
                </div>

                <div className="btn">
                    <button className="cta v1" onClick={() => {
                        navigate("/Summary")
                    }}>End Interview</button>
                </div>
            </div>
        </div>
    );
};

export default Interview;