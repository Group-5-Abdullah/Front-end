import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import React from 'react'
import ReadyModal from './ReadyModal';



export default function PackagesCard(props) {

    
    
    const [showFlag,setShowFlag]=useState(false);
    function modalExpose(){
        setShowFlag(true);
    }
    const handleClose = () => {
        setShowFlag(false);
      };
 



    const style1 = { backgroundColor: '#0dcaf0bd' };
    const style2 = { width: '18rem' };


    return (

        <div>


            <Col >
                <Card border="danger" style={{ ...style1, ...style2 }} >

                    <Card.Body>

                        <Card.Header style={{ color: 'black' }} >{`Pick one :) `}</Card.Header>
                        <Card.Text style={{ color: 'black' }} >
                            {`Gift Name: ${props.package.gift_title} `}
                        </Card.Text>
                        <Card.Img height={'250px'} variant="top" src={`${props.package.gift_image} `} />
                        <Card.Text style={{ color: 'black' }} >
                            {`Gift Price : ${props.package.gift_price}`}
                        </Card.Text>
                        <Card.Text style={{ color: 'black' }} >
                            {` ${props.package.flower_name}`}
                        </Card.Text>
                        <Card.Img height={'250px'} variant="top" src={`${props.package.flower_image} `} />
                        <Card.Text style={{color:'black'}} >{`Song Title : ${props.package.track_name}`}</Card.Text>
                                <Card.Text style={{color:'black'}} >
                                <a href={props.package.track_url}>{props.package.track_name}</a>
                                </Card.Text>
                                <Card.Text style={{color:'black'}} >
                                    {`Artist Name : ${props.package.artist_name}`}
                                </Card.Text>
                        <Button variant="light" onClick={() => { 
                            modalExpose();
                            
                             }}>add to your event</Button>
                             <ReadyModal showFlag={showFlag} handleClose={handleClose} Ready={props.package}/>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    )
}