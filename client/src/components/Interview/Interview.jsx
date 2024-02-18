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
    const mimeType = "audio/webm";

    const [permission, setPermission] = useState(false);
    const mediaRecorder = useRef(null);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [stream, setStream] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);
    const [audio, setAudio] = useState(null);

    const getMicrophonePermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                const streamData = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                });
                setPermission(true);
                setStream(streamData);
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };

    const startRecording = async () => {
        setRecordingStatus("recording");
        //create new Media recorder instance using the stream
        const media = new MediaRecorder(stream, { type: mimeType });
        //set the MediaRecorder instance to the mediaRecorder ref
        mediaRecorder.current = media;
        //invokes the start method to start the recording process
        mediaRecorder.current.start();
        let localAudioChunks = [];
        mediaRecorder.current.ondataavailable = (event) => {
           if (typeof event.data === "undefined") return;
           if (event.data.size === 0) return;
           localAudioChunks.push(event.data);
        };
        setAudioChunks(localAudioChunks);
      };

      const stopRecording = () => {
        setRecordingStatus("inactive");
        //stops the recording instance
        mediaRecorder.current.stop();
        mediaRecorder.current.onstop = () => {
          //creates a blob file from the audiochunks data
           const audioBlob = new Blob(audioChunks, { type: mimeType });
          //creates a playable URL from the blob file.
           const audioUrl = URL.createObjectURL(audioBlob);
           setAudio(audioUrl);
           setAudioChunks([]);
        };
      };

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

                <div className="controls">
                    <div className="v1">
                        <div className="audio-controls">
                            {!permission ? (
                            <button onClick={getMicrophonePermission} type="button">
                                Get Microphone
                            </button>
                            ) : null}
                            {permission && recordingStatus === "inactive" ? (
                            <button onClick={startRecording} type="button">
                                Start Recording
                            </button>
                            ) : null}
                            {recordingStatus === "recording" ? (
                            <button onClick={stopRecording} type="button">
                                Stop Recording
                            </button>
                            ) : null}
                        </div>
                        {audio ? (
                            <div className="audio-container">
                                <audio src={audio} controls></audio>
                                <a download href={audio}>
                                    Download Recording
                                </a>
                            </div>
                            ) : null}
                        <div className="btn">
                            <button className="cta v1" onClick={() => {
                                // navigate("/Summary")
                            }}>Next Question</button>
                        </div>
                    </div>
                    
                    <div className="btn">
                        <button className="cta v1" onClick={() => {
                            navigate("/Summary")
                        }}>End Interview</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Interview;