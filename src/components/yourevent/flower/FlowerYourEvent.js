
import React, { useState, useEffect } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { Card } from 'antd';





function FlowerYourEvent(props) {
    const { Meta } = Card;

    const [myFlowersArr, setMyFlowersArr] = useState([]);

    const SendReq = async () => {
        const serverURL = `${process.env.REACT_APP_serverURL}flower?eventid=${props.clickedEvent.eventid}`
        const res = await fetch(serverURL);
        const flowersData = await res.json();
        setMyFlowersArr(flowersData)

    }

    useEffect(() => {
        SendReq();
    }, [])

    const handleDelete = async (item) => {

        const requestOptions = {
            method: 'DELETE',

        };

        const res = await fetch(`${process.env.REACT_APP_serverURL}flower/${props.clickedEvent.eventid}?id=${item.id}`, requestOptions);
        const Data = await res.json();
        setMyFlowersArr(Data)
    }

    return (
        <div>
            
            <Row xs={1} md={4} className="g-4">
                {myFlowersArr.map((item) => {
                    return (
                        <Col key={item.flower_image} >
                           
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img width={"100%"} alt="example" src={item.flower_image} />}
                            >

                                {item.flower_title}
                                <Meta />
                                <br />
                                <Button variant="danger" style={{ width: '100%' }} onClick={()=>{
                                    handleDelete(item);
                                }}>Delete</Button>
                            </Card>

                        </Col>)
                })}
            </Row>

        </div>
    );
}

export default FlowerYourEvent;