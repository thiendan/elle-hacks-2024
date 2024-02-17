import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./Order.scss";
import { Context } from "../../utils/context";
import { useAuth0 } from "@auth0/auth0-react";

import { BiSolidDonateHeart } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";

const Order = () => {
    const navigate = useNavigate();
    const {setDonate} = useContext(Context);
    const {setLandingPage} = useContext(Context);

    return (
        <header className="order-header">
            <div className="order-title">
                <h1>Start a new order:</h1>
            </div>
            <div className="order-content">
                
                <div className="order-location">
                    
                </div>

                <div className="order-timeAndDate">

                </div>

            </div>
        </header>
    );
};

export default Order;