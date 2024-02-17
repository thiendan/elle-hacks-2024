import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./LandingPage.scss";
import { Context } from "../../utils/context";

import { BiSolidDonateHeart } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";

const LandingPage = () => {
    const navigate = useNavigate();
    const {setDonate} = useContext(Context);
    const {setLandingPage} = useContext(Context);

    return (
        <header className="landing-header">
            <div className="option-title">
                <h1>Choose an Option:</h1>
            </div>
            <div className="landing-content">
                
                <div className="container-dr donate" onClick={() => {
                    setDonate(true)
                    setLandingPage(true)}
                }>
                    <div className="content">
                        <h1>Donate</h1>
                        <BiSolidDonateHeart className="icon"/>
                    </div>
                </div>

                <div className="container-dr receive" onClick={() => {
                    setDonate(false)
                    setLandingPage(true)
                }}>
                    <div className="content">
                        <h1>Receive</h1>
                        <GiReceiveMoney className="icon"/>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default LandingPage;