import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';


import { Card } from 'antd';




import React from 'react'


export default function ReadyCard(props) {
    const { Meta } = Card;
    const handleDelete = async () => {

        const requestOptions = {
            method: 'DELETE',

        };

        const res = await fetch(`${process.env.REACT_APP_serverURL}readyPackeges/${props.clickedEvent.eventid}?id=${props.packageEvent.id}`, requestOptions);
        const Data = await res.json();

        props.setDELETEDArr(Data)
    }

    const style1 = { backgroundColor: 'white' };
    const style2 = { width: '18rem' };

    return (
        <div>

            <Col key={props.packageEvent.gift_image}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    >
                    {<img width={"100%"} alt="example" src={props.packageEvent.gift_image} />}
                    {`Gift Name: ${props.packageEvent.gift_title} `}
                    {`Gift Price : ${props.packageEvent.gift_price}`}
                    {props.packageEvent.flower_name}
                    <img width={"100%"} alt="example" src={props.packageEvent.flower_image} />
                    {`Song Title : ${props.packageEvent.track_name}`}
                    <a href={props.packageEvent.track_url}>{props.packageEvent.track_name}</a>
                    {`Artist Name : ${props.packageEvent.aritst_name}`}
                    <img  width={"100%"} alt="example" src={props.packageEvent.food_image} />
                    {props.packageEvent.food_title}
                    <Meta  />
                    <br/>
                    <Button variant="danger" style={{ width: '100%' }} onClick={() => { handleDelete() }}>Delete</Button>
                </Card>
               
            </Col>

        </div>



    )
}