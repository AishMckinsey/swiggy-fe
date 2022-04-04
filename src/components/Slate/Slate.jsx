import './Slate.css'

function Slate(props){
    return (
        <div className='menu'>
            <div>
                <p className='menu-name'>{props.name}</p>
            </div>
            <div>
                <p className='menu-price'>COST: {props.price}</p>
                <p className='menu-rating'>RATING: {props.extra}</p>
            </div>
        </div>
    )
}

export default Slate;