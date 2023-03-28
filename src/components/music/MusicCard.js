import { useState ,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import React from 'react'
import './Music.css';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

import MusicModal from './MusicModal';
import SideBarComp from '../SideBarComp';

export default function MusicCard(props) {

    const [chooseArr, setChooseArr] = useState([]);
    const user_email = localStorage.getItem("user_email");
    const serverUrl = `${process.env.REACT_APP_serverURL}events/${user_email}`;
    const getReq = () => {
      axios.get(serverUrl).then((resp) => {
        setChooseArr(resp.data);
      });
    };
    useEffect(() => {
      getReq();
    }, [chooseArr]);
    const { isAuthenticated, loginWithRedirect,user } = useAuth0();
    if (isAuthenticated) {
      localStorage.setItem("user_email", user.email);
    }

    const [showFlag, setShowFlag] = useState(false);
    function modalExpose() {
        setShowFlag(true);
    }
    const handleClose = () => {
        setShowFlag(false);
    };



    return (

        <div className="container" style={{ fontFamily: "Georgia"  }}  >
          <SideBarComp/>
            <div className="overlayMusic">
    
                <div className="col" key={props.music.id}>
                <div className="card border-secondary Music-card">
                    <Card.Img className="card-img-top" height={'250px'} variant="top" src={`https://img.freepik.com/free-vector/elegant-musical-notes-music-chord-background_1017-20759.jpg`} />
                    <Card.Header >{`Song Title : ${props.music.track_name}`}</Card.Header>
                    <Card.Text >
                        <a href={props.music.track_url}>{props.music.track_name}</a>
                    </Card.Text>
                    <Card.Text >
                        {`Artist Name : ${props.music.aritst_name}`}
                    </Card.Text>
                    <Button className="btn btn-primary"  onClick={() => {
                      if (isAuthenticated&& chooseArr.length) {
                        modalExpose();
                    } else if (isAuthenticated&&!chooseArr.length) {
                        alert("Add your event first!!!")
                    } else if (!isAuthenticated) {
                        loginWithRedirect()
                      }
                    }}>Add to your Event</Button>
                    <MusicModal showFlag={showFlag} handleClose={handleClose} music={props.music} />
        
                </div>
            </div>
            </div>




        </div>
    )
}