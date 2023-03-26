import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


import { useState } from 'react';
import React from 'react'


export default function MusicEventCard(props) {
    const userEmail = localStorage.getItem('user_email')
    const handleDelete = async () => {
       
        const requestOptions = {
            method: 'DELETE',
           
        };
        
        const res = await fetch(`${process.env.REACT_APP_serverURL}Music/${props.musicEvent.id}?val=${userEmail}`, requestOptions);
        const Data = await res.json();
       
        props.setDELETEDArr(Data)
    }

    const style1 = { backgroundColor: '#0dcaf0bd' };
    const style2 = { width: '18rem' };

    return (
        <div>


            <Col >
                <Card border="danger" style={{ ...style1, ...style2 }} >

                    <Card.Body>

                        <Card.Img height={'250px'} variant="top" src={`https://img.freepik.com/free-vector/elegant-musical-notes-music-chord-background_1017-20759.jpg`} />
                        <Card.Header style={{ color: 'black' }} >{`Song Title : ${props.musicEvent.track_name}`}</Card.Header>
                        <Card.Text style={{ color: 'black' }} >

                            <a href={props.musicEvent.track_url}>{props.musicEvent.track_name}</a>
                        </Card.Text>
                        <Card.Text style={{ color: 'black' }} >
                            {`Artist Name : ${props.musicEvent.aritst_name}`}
                        </Card.Text>
                        <Button variant="danger" style={{width:'50%'}} onClick={() => { handleDelete(props.musicEvent) }}>Delete</Button>
                    </Card.Body>
                </Card>
            </Col>




        </div>
    )
}