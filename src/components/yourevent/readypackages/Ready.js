import { useEffect, useState } from 'react';
import React from 'react'
import ReadyMap from './ReadyMap';

export default function Ready (props){
    const [readyEventArr, setReadyEventArr] = useState([])
    const sendReq = async () => {
       
        const serverURL = `${process.env.REACT_APP_serverURL}readyPackeges?eventid=${props.clickedEvent.eventid}`;
        const res = await fetch(serverURL);
        const Data = await res.json();
        setReadyEventArr(Data)
    }
    const setDELETEDArr = (Arr) => {
        setReadyEventArr(Arr)
     }
    useEffect(() => {

        sendReq();
    }, [])

    return (
        <div style={{ backgroundColor: '#4e3c3c' }}>

            
            <ReadyMap setDELETEDArr={setDELETEDArr} clickedEvent={props.clickedEvent}  fetchRes={readyEventArr} />
        </div>
    )
}