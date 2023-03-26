
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function FlowerYourEvent(props) {


    const [myFlowersArr, setMyFlowersArr] = useState([]);
    
    const user_email= localStorage.getItem('user_email')
 
     const SendReq = async () => {
         const serverURL = `${process.env.REACT_APP_serverURL}flower`
         const res = await fetch(serverURL);
         const flowersData = await res.json();
 
         if (user_email == user_email) {setMyFlowersArr(flowersData)};
 
     }
 
     useEffect(() => {
         SendReq();
     }, [myFlowersArr])


    return (
        <div>
            <Row xs={1} md={4} className="g-4">
                {myFlowersArr.map((item) => {
                    return ( 
                        <Col key={item.name} >
                            <Card style={{ width: '18rem', backgroundColor: 'gray' }}>
                                <Card.Img variant="top" src={`${item.photo}`} />
                                <Card.Title>{item.name}</Card.Title>
                                <Button variant="primary" style={{ backgroundColor: 'gray' }} onClick="">
                                    delete </Button>

                            </Card>
                        </Col>)
                })}
            </Row>
            
        </div>
    );
}

export default FlowerYourEvent;