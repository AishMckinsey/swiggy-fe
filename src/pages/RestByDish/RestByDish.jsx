import React, {useEffect,useState} from "react"
import {useParams} from "react-router-dom"
import makeRequest from "../../utils/makeRequest";
import { getResturantByDish} from '../../constants/apiEndPoints'

import Slate from "../../components/Slate/Slate";

function RestMenu(){

    const { dish } = useParams();
    const [allRest, setAllRest] = useState();
    const [isDataAvailable, setIsDataAvailable] = useState(false);
   
    useEffect( ()=>{
        makeRequest(getResturantByDish(dish)).then((response)=>{
            setAllRest(response.resturantByDish); 
            setIsDataAvailable(true);  
        })
    },[])
       
    
    return (
        <div>
            {isDataAvailable ?  
            (allRest.map((rest)=>{
                return (<Slate name={rest.fullName} price={rest.costForTwo} extra={rest.Location} />)
            })):
            <div> Data is Not Found</div>
        }

     </div>
    )
}
export default RestMenu;