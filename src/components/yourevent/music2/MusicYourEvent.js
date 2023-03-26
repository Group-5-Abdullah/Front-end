import { useEffect, useState } from 'react';
import MusicEventMap from './MusicEventMap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


import React from 'react'


export default function MusicYourEvent (props){
    const userEmail = localStorage.getItem('user_email')
    const [musicEventArr, setMusicEventArr] = useState([])
    const sendReq = async () => {
       
        const serverURL = `${process.env.REACT_APP_serverURL}Music?eventid=${props.eventid}`;
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

            
            <MusicEventMap setDELETEDArr={setDELETEDArr}  fetchRes={musicEventArr} />
        </div>
    )
}