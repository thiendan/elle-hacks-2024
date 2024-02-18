import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getQuestions } from "../../utils/openai";

import "./Interview.scss";

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