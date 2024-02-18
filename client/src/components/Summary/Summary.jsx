import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Context } from "../../utils/context";

import "./Summary.scss";

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
                                <div className="title">
                                    <h1>Overall Score</h1>
                                </div>
                            </div>
                            <div className="widget v2">
                                <div className="title">
                                    <h1>Active Listening</h1>
                                </div>
                            </div>
                            <div className="widget v2">
                                <div className="title">
                                    <h1>[Null]</h1>
                                </div>
                            </div>
                        </div>

                        <div className="row v2">
                            <div className="widget v1">
                                <div className="title">
                                    <h1>Non-Verbal Communication</h1>
                                </div>
                            </div>
                            <div className="widget v1">
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