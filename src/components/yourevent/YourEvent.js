
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import React from 'react'
import { useEffect } from "react";
import { useState } from 'react';

import './YourEvent.css';



export default function YourEvent(props) {
    const [eventArr, setEventArr] = useState([])
    const userEmail = localStorage.getItem('user_email')
    const serverUrl = `${process.env.REACT_APP_serverURL}events/${userEmail}`;
 
    const sendReq = async () => {
        
        const result = await fetch(serverUrl);
        const data = await result.json();
        setEventArr(data)
    }

    useEffect(() => {

        sendReq();
    }, [eventArr])

   
  
  

        
       
    
    const handleDelete = async (element) => {
       
        const requestOptions = {
            method: 'DELETE',
           
        };
        
        const res = await fetch(`${process.env.REACT_APP_serverURL}events/${element.eventid}?user_email=${userEmail}`, requestOptions);
        const Data = await res.json();
        setEventArr(Data)
    }
  
    const style1 = { backgroundColor: '#0dcaf0bd' };
    const style2 = { width: '18rem' };
    return (
        <div style={{minHeight:"100vh"}} >
              <Container >
              <br/>
      <br/>
      <br/>
      <br/>
      <br/>
           <Row xs={1} md={4} className="g-4">
          {  eventArr.map((element)=>{
                return(
                  
          <Col key={element.eventid} >
          <Card  >

              <Card.Body >

                  <Card.Header style={{ color: 'black',fontSize:"50px",fontFamily:'fantasy' }} >{element.event}</Card.Header>
                  <Card.Text style={{ color: 'black' }} >
                      {`${element.description}`}
                  </Card.Text>
                  <Card.Text style={{ color: 'black' }} >
                      {`${element.location}`}
                  </Card.Text>
                  <Card.Text style={{ color: 'black' }} >
                      {`${element.date}`}
                  </Card.Text>
                  <Button variant="danger" style={{width:'50%'}} onClick={() => { handleDelete(element) }}>Delete</Button>
                  
                  <Link  onClick={(item)=>{props.passedEvent(element)}} className="nav-link nav-link1 " to="/Details">Details</Link>
                  
                  
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