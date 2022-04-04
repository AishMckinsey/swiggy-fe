import './AllCards.css'
import Card from '../Card/Card';

function AllCards(props) {
    return (
        <div className='all-cards'>
           { props.allData.map((eachRest)=>{
               return (<Card key={eachRest.id} id={eachRest.id} name={eachRest.fullName} costForTwo={eachRest.costForTwo} location={eachRest.Location} setSelectedRest={props.setSelectedRest}/>)
           })}
        </div>
    )
}

export default AllCards;