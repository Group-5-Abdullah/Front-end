import { Link } from 'react-router-dom';
import Footer from './Footer';
import FormComp from './Form/FormComp';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Music from './music/Music';
import Flower from './flower/Flower';
import Food from './food/Food';
import Gifts from './gifts/Gifts';
import ReadyPackages from './ReadyPackages/ReadyPackages';
import YourEvent from './yourevent/YourEvent';
import { Nav, Navbar } from 'react-bootstrap';
import './Home.css' ;
import AboutUs from './AboutUs/AboutUs';
import HomeContent from './HomeContent';
import HomePage from './HomePage';
import YouEventModal from './yourevent/YourEventModal';
import { useState } from 'react';

function Home() {
    const [clickedEvent, setClickedEvent] = useState({});
    const passedEvent = (Arr) => {
        setClickedEvent(Arr)
        console.log("parent");
     }

    return (<>
        {/* <Header /> */}
        <div>
{/* <HomePage/> */}
            {/* <FormComp/>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{ fontFamily: "Georgia" }} className="flex-column" >
                        <Link className="nav-link" to="/music">Music</Link>
                        <Link className="nav-link" to="/flower">Flower</Link>
                        <Link className="nav-link" to="/food">Food</Link>
                        <Link className="nav-link" to="/gift">Gift</Link>
                        <Link className="nav-link" to="/readypackages">Our designs</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> */}
            
            <Routes>
            <Route path='/' element={<HomePage />}></Route>

            
                <Route path='/Details' element={<YouEventModal clickedEvent = {clickedEvent} />}></Route>
                

                <Route path='/music' element={<Music />}></Route>
                <Route path='/flower' element={<Flower />}></Route>
                <Route path='/food' element={<Food />}></Route>
                <Route path='/gift' element={<Gifts />}></Route>
                <Route path='/readypackages' element={<ReadyPackages />}></Route>
                <Route path='/yourevent' element={<YourEvent passedEvent = {passedEvent} />}></Route>
                <Route path='/aboutus' element={<AboutUs/>}></Route>
            </Routes>
            {/* <HomeContent/> */}
            {/* <Footer /> */}
        </div>
    </>
    )
} export default Home;
