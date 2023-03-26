
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Flower() {
    const [flowersArr, setflowersArr] = useState([]);
    
   const user_email= localStorage.getItem('user_email')

    const SendReq = async () => {
        const serverURL = `${process.env.REACT_APP_serverURL}flowerslist`
        const res = await fetch(serverURL);
        const flowersData = await res.json();

        setflowersArr(flowersData);

    }

    useEffect(() => {
        SendReq();
    }, [flowersArr])



    const addMyEventFlowers = async (item) => {

        const serverURL = process.env.REACT_APP_serverURL;
        
        console.log(item);
        
        const obj = {
            user_email: user_email,
            name: item.name,
            photo: item.photo
        }
        console.log(obj);

        await axios.post( `${serverURL}flowerslist`, obj);

    }

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
                                    alert(`${item.name} added to your flowerslist!`)
                                    addMyEventFlowers(item);
                                }}>
                                    add to my event </Button>

                            </Card>
                        </Col>)
                })}
            </Row>
        </div>
    )
}

export default Flower;