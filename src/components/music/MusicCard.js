import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import React from 'react'

import { useAuth0 } from "@auth0/auth0-react";

export default function MusicCard(props) {

    const { user } = useAuth0();

    const dataToSend = {
        user_email: user.email,
        track_name: props.music.track_name,
        track_url: props.music.track_url,
        aritst_name: props.music.aritst_name
    }
    const fetchRes = async () => {
        await fetch(`${process.env.REACT_APP_serverURL}Music`, {

            method: 'POST',
            body: JSON.stringify(

                dataToSend
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }

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
                        <Button variant="light" onClick={() => { fetchRes(); }}>add to your event</Button>
                    </Card.Body>
                </Card>
            </Col>




        </div>
    )
}