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
import SideBarComp from "./SideBarComp";
// import AboutUs from './AboutUs/AboutUs';
// import HomeContent from './HomeContent';

export default function HomePage() {




    return (
        <div>
            <div>
            </div>
            <SideBarComp />
            <div>
                <FormComp />
                <HomeContent />
            </div>
        </div>
    )
}