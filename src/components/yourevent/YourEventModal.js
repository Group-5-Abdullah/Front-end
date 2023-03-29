
import FlowerYourEvent from "./flower/FlowerYourEvent";
import FoodYourEvent from "./food/FoodYourEvent";
import Event from './form/Event'
import GiftsYourEvent from "./gifts/GiftsYourEvent";
import MusicYourEvent from "./music2/MusicYourEvent";


import Ready from "./readypackages/Ready";



export default function YouEventModal(props) {
    return (
        <div>
        
     
            <header style={{ backgroundColor: 'gray' }} >Your Event Information !</header>
            <h3>Form</h3>
            
            <br/>
            <Event clickedEvent={props.clickedEvent}/>

   


            <br/>
            <h3>Your Event Flowers</h3>
            <br/>
            <FlowerYourEvent clickedEvent={props.clickedEvent}/>
            <br/>
            <h3>Your Event Food</h3>
            <br/>
            <FoodYourEvent clickedEvent={props.clickedEvent}/>
            <br/>
            <h3>Your Event Gifts</h3>
            <br/>
            <GiftsYourEvent clickedEvent={props.clickedEvent}/>
            <br/>
            <h3>Your Event Music</h3>
            <br/>
            <MusicYourEvent clickedEvent={props.clickedEvent}/>
            <br/>
            <h3>Your Event Ready Package</h3>
            <br/>
            <Ready clickedEvent={props.clickedEvent}/>
            
       
        </div>
    )
}