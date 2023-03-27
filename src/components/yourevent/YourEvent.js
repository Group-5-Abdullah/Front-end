
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';


import Container from 'react-bootstrap/Container';
import React from 'react'
import { useEffect } from "react";
import { useState } from 'react';
import YouEventModal from './YourEventModal';


export default function YourEvent() {
    const [eventArr, setEventArr] = useState([])
    const userEmail = localStorage.getItem('user_email')
    const sendReq = async () => {
        const serverUrl = `${process.env.REACT_APP_serverURL}events/${userEmail}`;
        const result = await fetch(serverUrl);
        const data = await result.json();
        setEventArr(data)
    }

    useEffect(() => {

        sendReq();
    }, [eventArr])

    const [showFlag, setShowFlag] = useState(false);
    const [clickedEvent, setClickedEvent] = useState({});
    const handleShow = (item) => {

        setClickedEvent(item);
        setShowFlag(true);
    }
    const handleDelete = async (element) => {
       
        const requestOptions = {
            method: 'DELETE',
           
        };
        
        const res = await fetch(`${process.env.REACT_APP_serverURL}events/${element.eventid}`, requestOptions);
        console.log(element.eventid)
        const Data = await res.json();
       
        // props.setDELETEDArr(Data)
    }
    const handleclose = () => {
        setShowFlag(false);
    }
    const style1 = { backgroundColor: '#0dcaf0bd' };
    const style2 = { width: '18rem' };
    return (
        <div >
              <Container >
           
           <Row xs={1} md={4} className="g-4">
          {  eventArr.map((element)=>{
                return(
                  
        //   <MusicEventCard  key={element.eventid} Event={element} />
          <Col key={element.eventid} >
          <Card border="danger" style={{ ...style1, ...style2 }} >

              <Card.Body>

                  <Card.Header style={{ color: 'yellow' }} >{element.event}</Card.Header>
                  <Card.Text style={{ color: 'red' }} >
                      {`${element.description}`}
                  </Card.Text>
                  <Card.Text style={{ color: 'red' }} >
                      {`${element.location}`}
                  </Card.Text>
                  <Card.Text style={{ color: 'red' }} >
                      {`${element.date}`}
                  </Card.Text>
                  <Button variant="danger" style={{width:'50%'}} onClick={() => { handleDelete(element) }}>Delete</Button>
                  <Button variant="success" style={{width:'50%'}} onClick={() => { handleShow(element) }}>Update</Button>
                  <YouEventModal showFlag={showFlag} clickedEvent={clickedEvent} handleclose={handleclose}/>
              </Card.Body>
          </Card>
      </Col>
          )
          
            })}
            </Row>
            </Container>
           
        </div>
    )
}