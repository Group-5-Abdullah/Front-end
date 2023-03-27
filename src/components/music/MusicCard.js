import { useState} from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import React from 'react'


import MusicModal from './MusicModal';

export default function MusicCard(props) {

  
    
    const [showFlag,setShowFlag]=useState(false);
    function modalExpose(){
        setShowFlag(true);
    }
    const handleClose = () => {
        setShowFlag(false);
      };

    const style1 = { backgroundColor: '#0dcaf0bd' };
    const style2 = { width: '18rem' };


    return (

        <div>


            <Col >
                <Card border="danger" style={{ ...style1, ...style2 }} >

                    <Card.Body>

                        <Card.Img height={'250px'} variant="top" src={`https://img.freepik.com/free-vector/elegant-musical-notes-music-chord-background_1017-20759.jpg`} />
                        <Card.Header style={{ color: 'black' }} >{`Song Title : ${props.music.track_name}`}</Card.Header>
                        <Card.Text style={{ color: 'black' }} >

                            <a href={props.music.track_url}>{props.music.track_name}</a>
                        </Card.Text>
                        <Card.Text style={{ color: 'black' }} >
                            {`Artist Name : ${props.music.aritst_name}`}
                        </Card.Text>
                        <Button variant="light" onClick={() => { modalExpose(); }}>add to your event</Button>
                        <MusicModal showFlag={showFlag} handleClose={handleClose} music={props.music} />
                    </Card.Body>
                </Card>
            </Col>




        </div>
    )
}