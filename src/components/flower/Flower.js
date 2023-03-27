
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import FlowerModal from './FlowerModal';

function Flower() {
    const [flowersArr, setflowersArr] = useState([]);

    const [clickedItem,setClickedItem]=useState({})

    const SendReq = async () => {
        const serverURL = `${process.env.REACT_APP_serverURL}flowerslist`
        const res = await fetch(serverURL);
        const flowersData = await res.json();

        setflowersArr(flowersData);

    }

    useEffect(() => {
        SendReq();
    }, [])


    const [showFlag, setShowFlag] = useState(false);
    function modalExpose(item) {
        setShowFlag(true);
        setClickedItem(item);
    }
    const handleClose = () => {
        setShowFlag(false);
    };


 

    return (
        <div>
            <Row xs={1} md={4} className="g-4">
                {flowersArr.map((item) => {
                    return (
                        <Col key={item.name} >
                            <Card style={{ width: '18rem', backgroundColor: 'gray' }}>
                                <Card.Img variant="top" src={`${item.photo}`} />
                                <Card.Title>{item.name}</Card.Title>
                                <Button variant="primary" style={{ backgroundColor: 'gray' }} onClick={() => {

                                    modalExpose(item);
                                }}>
                                    add to my event </Button>
                                <FlowerModal showFlag={showFlag} handleClose={handleClose} item={clickedItem} />
                            </Card>
                        </Col>)
                })}
            </Row>
        </div>
    )
}

export default Flower;