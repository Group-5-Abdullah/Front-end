import FormComp from "./Form/FormComp";
import HomeContent from "./HomeContent";

import './HomePage.css';
import SideBarComp from "./SideBarComp";
import  Slider  from "./Slider";


export default function HomePage() {




    return (
        <div>
            
            
            <SideBarComp />
            <div>

                <Slider />
                <FormComp />
                <HomeContent />
            </div>
        </div>
    )
}