
import FlowerYourEvent from "./flower/FlowerYourEvent";
import FoodYourEvent from "./food/FoodYourEvent";
import Event from './form/Event'
import GiftsYourEvent from "./gifts/GiftsYourEvent";
import MusicYourEvent from "./music2/MusicYourEvent";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Ready from "./readypackages/Ready";
import { Card } from "react-bootstrap";


export default function YouEventModal(props) {
    return (
        <div>
        
     
            <header style={{ backgroundColor: 'gray' }} closeButton>Your Event Information !</header>
            <h3>Form</h3>
            <Event clickedEvent={props.clickedEvent}/>

   



            <h3>Your Event Flowers</h3>
            <FlowerYourEvent clickedEvent={props.clickedEvent}/>

            <h3>Your Event Food</h3>
            <FoodYourEvent clickedEvent={props.clickedEvent}/>

            <h3>Your Event Gifts</h3>
            <GiftsYourEvent clickedEvent={props.clickedEvent}/>
            <h3>Your Event Music</h3>

            <MusicYourEvent clickedEvent={props.clickedEvent}/>
            <h3>Your Event Ready Package</h3>
            <Ready clickedEvent={props.clickedEvent}/>
            
       
        </div>
    )
}