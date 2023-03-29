import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import { Card } from 'antd';



import React from 'react'


export default function MusicEventCard(props) {
    const { Meta } = Card;
    const handleDelete = async () => {

        const requestOptions = {
            method: 'DELETE',

        };

        const res = await fetch(`${process.env.REACT_APP_serverURL}Music/${props.clickedEvent.eventid}?id=${props.musicEvent.id}`, requestOptions);
        const Data = await res.json();

        props.setDELETEDArr(Data)
    }

    const style1 = { backgroundColor: 'white' };
    const style2 = { width: '18rem' };

    return (
        <div>


            <Col >
               

                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src='https://img.freepik.com/free-vector/elegant-musical-notes-music-chord-background_1017-20759.jpg' />}
                >
                    <a href={props.musicEvent.track_url}>{props.musicEvent.track_name}</a>
                    <Meta title={props.musicEvent.aritst_name}  />
                    <br/>
                    <Button variant="danger" style={{width:'100%'}} onClick={() => { handleDelete() }}>Delete</Button>
                </Card>


            </Col>




        </div>
    )
}