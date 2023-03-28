
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import FlowerModal from './FlowerModal';

function Flower() {
    const [flowersArr, setflowersArr] = useState([]);

    const [clickedItem, setClickedItem] = useState({})

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
        <div className="container" style={{ fontFamily: "Georgia" ,  backgroundColor: 'rgba(255, 255, 255, 0.471)'  }}  >
            <div className="overlayFlower">
            <Row xs={1} md={4} className="g-4">  
                {flowersArr.map((item) => {
                    return (
                        <div className="Col" key={item.name} >
                            <div className="card border-secondary flower-card"></div>
                            <Card style={{ width: '18rem', backgroundColor: 'gray' }}>
                                <Card.Img className="card-img-top" height={'250px'} variant="top" src={`${item.photo}`} />
                                <Card.Header>{item.name}</Card.Header>
                                <Button className="btn btn-primary"  onClick={() => {

                                    modalExpose(item);
                                }}>
                                    Add to your Event </Button>
                                <FlowerModal showFlag={showFlag} handleClose={handleClose} item={clickedItem} />
                            </Card>
                        </div>)
                })}
            </Row></div>
        </div>

    )
}

export default Flower;