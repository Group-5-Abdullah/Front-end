
import { Route, Routes } from 'react-router-dom';
import Music from './music/Music';
import Flower from './flower/Flower';
import Food from './food/Food';
import Gifts from './gifts/Gifts';
import ReadyPackages from './ReadyPackages/ReadyPackages';
import YourEvent from './yourevent/YourEvent';

import './Home.css' ;
import About from './About';

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
      
            <Routes>
            <Route path='/' element={<HomePage />}></Route>

            
                <Route path='/Details' element={<YouEventModal clickedEvent = {clickedEvent} />}></Route>
                

                <Route path='/music' element={<Music />}></Route>
                <Route path='/flower' element={<Flower />}></Route>
                <Route path='/food' element={<Food />}></Route>
                <Route path='/gift' element={<Gifts />}></Route>
                <Route path='/readypackages' element={<ReadyPackages />}></Route>
                <Route path='/yourevent' element={<YourEvent passedEvent = {passedEvent} />}></Route>
                <Route path='/about' element={<About/>}></Route>
            </Routes>
          
    </>
    )
} export default Home;
