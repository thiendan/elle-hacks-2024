import { useEffect, useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FocusLock from 'react-focus-lock'; 
import { GoogleMapReact } from 'google-map-react'
// import {PlaceIdContext} from './PlaceIdContext'; 
import "./Home.scss";
// import "./map.css";

import img1 from "../../assets/hm-img1.png";

const Home = () => {
    // const [placeId, setPlaceId] = useContext(PlaceIdContext);
    // const marker = useRef();

    // useEffect(() => {
    //     if (marker.current) { 
    //         marker.current.setMap(null);
    //     }
    //     const google = window.google;
    //     const service = new google.maps.places.PlacesService(mapObject);
    //     const request = {
    //     placeId: placeId,
    //     fields: [
    //         'formatted_address',
    //         'geometry',
    //         'name',
    //         'url',
    //     ],
    //     };
    //     service.getDetails(request, handleResponse);
    //     function handleResponse(place, placesServiceStatus) {
    //     // Handle successful responses (Section 2.3)
    //     if (placesServiceStatus === 'OK') {
    //     const searchedPlace = {
    //       address: place.formatted_address,
    //       coordinates: {
    //         lat: place.geometry.location.lat(),
    //         lng: place.geometry.location.lng(),
    //       },
    //       name: place.name,
    //       url: place.url,
    //     };
    //     marker.current.setMap(mapObject);
    //     mapObject.panTo(searchedPlace.coordinates);
    // } else {
    //     console.error('Google Maps Place Details API call has failed.');
    // }
    // }
    // }, [mapObject, placeId]);


    return (
        <div className="main-content-home">
            <div className="home-content">

                <div className="title-banner">
                    <div className="section-title-home">
                        <h1>PELICAN</h1>
                        <p><em>empowering families one meal at a time.</em></p>
                    </div>
                    <div className="section-img">
                        <img src={img1} alt=""/>
                    </div>
                </div>

                {/* <div className="location-banner">
                    <div className="section-title-location">
                        <h1>Find a food bank near you</h1>
                    </div>
                    <div className="section-map">
                        
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default Home;