import FormComp from "./Form/FormComp";
import HomeContent from "./HomeContent";
import { Link } from 'react-router-dom';
// import Footer from './Footer';
// import FormComp from './Form/FormComp';
// import Header from './Header';
// import { Route, Routes } from 'react-router-dom';
// import Music from './music/Music';
// import Flower from './flower/Flower';
// import Food from './food/Food';
// import Gifts from './gifts/Gifts';
// import ReadyPackages from './ReadyPackages/ReadyPackages';
// import YourEvent from './yourevent/YourEvent';
import { Nav, Navbar } from 'react-bootstrap';
import { useState } from "react";
import './HomePage.css';
// import AboutUs from './AboutUs/AboutUs';
// import HomeContent from './HomeContent';

export default function HomePage() {

    const [clickedEvent, setClickedEvent] = useState({})


    return (
        <div className="myHome">
            <Navbar bg="light" expand="sm" fixed="bottom"   >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav  style={{ fontFamily: "Georgia",marginTop:"5%" }}  className="flex-column" >

                        <Link className="nav-link" to="/music">Music</Link>
                        <Link className="nav-link" to="/flower">Flower</Link>
                        <Link className="nav-link" to="/food">Food</Link>
                        <Link className="nav-link" to="/gift">Gift</Link>
                        <Link className="nav-link" to="/readypackages">Our designs</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div>
                <FormComp />
                <HomeContent />
            </div>
        </div>
    )
}