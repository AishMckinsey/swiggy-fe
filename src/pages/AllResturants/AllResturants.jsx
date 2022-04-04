import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import './AllResturants.css';
import AllCards from '../../components/AllCards/AllCards';
import makeRequest from '../../utils/makeRequest';

import {getAllRestaurants} from '../../constants/apiEndPoints';
import {ALL_RESTURANTS, SEE_BY_DISH} from '../../constants/routes';

function AllResturants() {
    let navigate = useNavigate();

    const [allData, setAllData] = useState([]);
    const [dish, setDish] = useState("SEARCH BY DISH");

    const selectRest = (restId) =>{
        navigate(`${ALL_RESTURANTS}${restId}/`)
    }
    useEffect(()=>{
        makeRequest(getAllRestaurants).then((response)=>{
            setAllData(response.getAllResturant);
        })
    },[])
    
    return (
        <>
            <div className="searchByRest">
                <form className="home-submit-button" onSubmit={()=>{navigate(`${SEE_BY_DISH}${dish}/`)}}>
                    <input className="home-button" placeholder={dish} onChange={(event)=>{setDish(event.target.value)}}></input> 
                </form>   
            </div>
            <div className="allRest"> 
                <AllCards allData={allData} setSelectedRest={selectRest}/>
            </div>
        </>
   
    );
}

export default AllResturants;