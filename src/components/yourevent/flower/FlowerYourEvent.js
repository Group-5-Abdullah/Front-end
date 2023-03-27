
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



function FlowerYourEvent(props) {


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
                            <Card style={{ width: '18rem', backgroundColor: 'gray' }}>
                                <Card.Img variant="top" src={`${item.flower_image}`} />
                                <Card.Title>{item.flower_title}</Card.Title>
                                <Button variant="danger"  onClick={()=>{
                                    handleDelete(item);
                                }}>
                                    delete </Button>

                            </Card>
                        </Col>)
                })}
            </Row>
            
        </div>
    );
}

export default FlowerYourEvent;