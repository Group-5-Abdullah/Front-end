import Form from "./form/Form";
import MusicYourEvent from './music/MusicYourEvent'
import FlowerYourEvent from './flower/FlowerYourEvent'
import FoodYourEvent from './food/FoodYourEvent'
import GiftsYourEvent from "./gifts/GiftsYourEvent.Js";
import Ready from "./readypackages/Ready";
export default function YourEvent (){
    return(
        <div>
            <Form/>
            <MusicYourEvent/>
            <FlowerYourEvent/>
            <FoodYourEvent/>
            <GiftsYourEvent/>
            <Ready/>
        </div>
    )
}