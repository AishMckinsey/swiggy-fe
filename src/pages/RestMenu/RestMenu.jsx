import React, {useEffect,useState} from "react"
import {useParams} from "react-router-dom"
import makeRequest from "../../utils/makeRequest";
import {getRestaurantMenu} from '../../constants/apiEndPoints'

import Slate from "../../components/Slate/Slate";

function RestMenu(){

    const { id } = useParams();
    const restaurantId = parseInt(id, 10);

    const [menu, setMenu] = useState([]);
   
    useEffect(()=>{
        makeRequest(getRestaurantMenu(restaurantId)).then((response)=>{
            setMenu(response.getResturant);     
        })
    },[])

    return (
        <div>
           {menu.map((dish)=>{
               return (<Slate name={dish.name} price={dish.price} extra={dish.rating} />)
           })}
        </div>
    )
}
export default RestMenu;