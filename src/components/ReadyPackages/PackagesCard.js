import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import React from 'react'

import { useAuth0 } from "@auth0/auth0-react";

export default function PackagesCard(props) {
 
    const { user } = useAuth0();

    const dataToSend = {
        user_email: user.email,
        gift_title: props.package.gift_title,
        gift_image: props.package.gift_image,
        gift_price: props.package.gift_price,
        flower_image: props.package.flower_image,
        flower_name: props.package.flower_name,
        track_name: props.package.track_name,
        track_url: props.package.track_url,
        artist_name: props.package.artist_name,
        food_title: props.package.food_title,
        food_image: props.package.food_image

    }
    const fetchRes = async () => {
        await fetch(`${process.env.REACT_APP_serverURL}readyPackeges`, {

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

                        <Card.Header style={{ color: 'black' }} >{`Pick one :) `}</Card.Header>
                        <Card.Text style={{ color: 'black' }} >
                            {`Gift Name: ${props.package.gift_title} `}
                        </Card.Text>
                        <Card.Img height={'250px'} variant="top" src={`${props.package.gift_image} `} />
                        <Card.Text style={{ color: 'black' }} >
                            {`Gift Price : ${props.package.gift_price}`}
                        </Card.Text>
                        <Card.Text style={{ color: 'black' }} >
                            {` ${props.package.flower_name}`}
                        </Card.Text>
                        <Card.Img height={'250px'} variant="top" src={`${props.package.flower_image} `} />
                        <Card.Text style={{color:'black'}} >{`Song Title : ${props.package.track_name}`}</Card.Text>
                                <Card.Text style={{color:'black'}} >
                                <a href={props.package.track_url}>{props.package.track_name}</a>
                                </Card.Text>
                                <Card.Text style={{color:'black'}} >
                                    {`Artist Name : ${props.package.artist_name}`}
                                </Card.Text>
                        <Button variant="light" onClick={() => { 
                            fetchRes();
                            alert('Added To Your Event ;)');
                             }}>add to your event</Button>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    )
}