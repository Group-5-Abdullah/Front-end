import { useEffect, useState } from 'react';
import MusicEventMap from './MusicEventMap';


import React from 'react'


export default function MusicYourEvent (props){

    const [musicEventArr, setMusicEventArr] = useState([])
    const sendReq = async () => {
       
        const serverURL = `${process.env.REACT_APP_serverURL}Music?eventid=${props.clickedEvent.eventid}`;
        const res = await fetch(serverURL);
        const Data = await res.json();
        setMusicEventArr(Data)
    }
    const setDELETEDArr = (Arr) => {
        setMusicEventArr(Arr)
     }
    useEffect(() => {

        sendReq();
    }, [])

    return (
        <div style={{ backgroundColor: '#4e3c3c' }}>

            
            <MusicEventMap setDELETEDArr={setDELETEDArr} clickedEvent={props.clickedEvent}  fetchRes={musicEventArr} />
        </div>
    )
}