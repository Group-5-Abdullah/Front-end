import { Container } from "react-bootstrap";
import FormComp from "./Form/FormComp";
import HomeContent from "./HomeContent";

import './HomePage.css';
import SideBarComp from "./SideBarComp";
import  Slider  from "./Slider";


export default function HomePage() {




    return (
        <Container>
        <div>
            
            
            <SideBarComp />
            <div>
<br/>
<br/>
                <Slider />
                <br/>
                <br/>
                <FormComp />
                <br/>
                <br/>
                <HomeContent />
            </div>
        </div>
        </Container>
    )
}