import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./Header.scss";
import { Context } from "../../utils/context";
import { useAuth0 } from "@auth0/auth0-react";

import { PiBirdBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

const Header = () => {
    const navigate = useNavigate();
    const {landingPage, setLandingPage} = useContext(Context);
    const {donate} = useContext(Context);
    // const {visited, setVisited} = useContext(Context);
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <header className="main-header">
            <div className="header-content">
                <ul className="left">
                    
                </ul>
            
                <div className="center" onClick={()=> navigate("/")}>
                    <PiBirdBold className="icon"/>
                    <h1>Pelican</h1>
                </div>

                {!(isAuthenticated) && <div className="right">
                    <button className="cta v1" onClick={() => {
                        loginWithRedirect()
                        }}>Sign Up</button>
                    <button className="cta v2" onClick={() => {
                        loginWithRedirect()
                        }}>Log In</button>
                </div>}

                {(isAuthenticated) && <div className="right">
                    <button className="cta v1" onClick={() => {
                        logout({ logoutParams: { returnTo: window.location.origin } })
                        }}> Log Out </button>
                    <div className="pfp">
                        <img src={user.picture} alt={user.name} />
                        {/* <h2>{user.name}</h2>
                        <p>{user.email}</p> */}
                    </div>
                    
                    {!landingPage && <div onClick={() => {
                        navigate('/LandingPage')
                    }}/>}
                </div>}

            </div>
        </header>
    );
};

export default Header;