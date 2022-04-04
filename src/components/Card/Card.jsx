import image9 from '../../assets/images/9.jpg';
import image10 from '../../assets/images/10.jpg';
import image11 from '../../assets/images/11.jpg';
import image12 from '../../assets/images/12.jpg';
import PropTypes from 'prop-types';

import './Card.css'
function Card({id,name,costForTwo, location,setSelectedRest}){
    
    let image_no = -1;
    switch(id){
        case 9: image_no = image9; break;
        case 10: image_no = image10; break;
        case 11: image_no = image11; break;
        case 12: image_no = image12; break;
        default: image_no=-1;
    }

    const restClickHandler = ()=>{
        setSelectedRest(id);
    }
    return (
    <div>
        <button className='card-button' onClick={restClickHandler}>
        <div className="card-container">
           <div><img className="card-image" src={image_no} alt="restaurant_image" /></div>
            <div className='card-text'> 
                <div><p className="card-name">{name}</p></div>
                <div>
                    <p className="card-location">Location: {location}</p>
                    <p className="card-costForTwo">Cost For Two: {costForTwo}</p>
                </div>
                
            </div>     
          </div>
        </button>
       
    </div>
    )
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    costForTwo: PropTypes.number.isRequired,
  };
export default Card;