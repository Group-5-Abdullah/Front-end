import React, { useState, useEffect } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import { Card } from 'antd';




export default function GiftsYourEvent(props) {
    const { Meta } = Card;
    const [clickedItem, setClickedItem] = useState({});
    const [giftsArr, setGiftsArr] = useState([]);

    const SendReq = async () => {
        const serverURL = `${process.env.REACT_APP_serverURL}gift?eventid=${props.clickedEvent.eventid}`
        axios.get(serverURL).then((resp) => {
            setGiftsArr(resp.data)
        })


    }

    useEffect(() => {
        SendReq();
    }, [giftsArr])

    const handleDelete = async (item) => {
        setClickedItem(item);
        axios.delete(`${process.env.REACT_APP_serverURL}gift/${props.clickedEvent.eventid}?id=${clickedItem.id}`)
            .then((resp) => {
                setGiftsArr(resp.data)
            })

    }
    return (

        <div>
            <Row xs={1} md={4} className="g-4">
                {giftsArr.map((item) => {
                    return (
                        <Col key={item.gift_image} >
                         
                            <Card
                                hoverable
                                style={{ width: 240 }}
                            >
                                {<img width={"100%"} alt="example" src={item.gift_image} />}
                                {item.gift_title}
                                <br/>
                                {`Gift Price : ${item.gift_price}`}
                               <br/>
                               {`Gift Quantity : ${item.gift_quantity}`}

                                <Meta />
                                <br />
                                <Button variant="danger" style={{ width: '100%' }} onClick={() => { handleDelete(item) }}>Delete</Button>
                            </Card>
                        </Col>)
                })}
            </Row>

        </div>
    );

}