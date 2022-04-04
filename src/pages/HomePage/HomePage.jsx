import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import './HomePage.css'
import {SEE_BY_DISH} from "../../constants/routes";

function HomePage() {

    const navigate = useNavigate();
    const [dish, setDish] = useState("SEARCH BY DISH");

    return (
    <div className="home"> 
       <div className="home-text">WELCOME TO SWIGGY !!!</div>
       <div className="home-text">ONE PLACE STOP FOR YOUR TASTES</div>
        <div className="home-button-group">
            <Link to='swiggy/seeOptions'><button className="home-button">SEE RESTURANTS</button></Link>
            <form className="home-submit-button" onSubmit={()=>{navigate(`${SEE_BY_DISH}${dish}/`)}}>
                <input className="home-button" placeholder={dish} onChange={(event)=>{setDish(event.target.value)}}></input> 
            </form>   
        </div>
    </div>
    );
}

export default HomePage;