import Form from "./form2/Form";
import MusicYourEvent from './music2/MusicYourEvent'
import FlowerYourEvent from './flower2/FlowerYourEvent'
import FoodYourEvent from './food2/FoodYourEvent'
import GiftsYourEvent from "./gifts2/GiftsYourEvent";
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