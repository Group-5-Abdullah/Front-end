
import FlowerYourEvent from "./flower/FlowerYourEvent";
import FoodYourEvent from "./food/FoodYourEvent";
import Form from './form/Event'
import GiftsYourEvent from "./gifts/GiftsYourEvent";
import MusicYourEvent from "./music2/MusicYourEvent";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Ready from "./readypackages/Ready";


export default function YouEventModal(props) {
    return (
        <Modal show={props.showFlag} onHide={props.handleclose}>
            <Modal.Header style={{ backgroundColor: 'gray' }} closeButton>Your Event Information !</Modal.Header>
            <h3>Form</h3>
            <Form clickedEvent={props.clickedEvent}/>
            {/* <h3>Your Event Flowers</h3> */}

            <FlowerYourEvent clickedEvent={props.clickedEvent}/>
            <h3>Your Event Flowers</h3>

            <FoodYourEvent clickedEvent={props.clickedEvent}/>
            <h3>Your Event Food</h3>

            <GiftsYourEvent clickedEvent={props.clickedEvent}/>
            <h3>Your Event Gifts</h3>

            {/* <MusicYourEvent clickedEvent={props.clickedEvent}/> */}
            <h3>Your Event Ready Package</h3>
            <Ready clickedEvent={props.clickedEvent}/>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleclose}>
                    Close
                </Button>
                
            </Modal.Footer>
        </Modal>
    )
}