import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default function GiftsYourEvent (props){
    const [clickedItem,setClickedItem]=useState({});
    const [giftsArr, setGiftsArr] = useState([]);
 
     const SendReq = async () => {
         const serverURL = `${process.env.REACT_APP_serverURL}gift?eventid=${props.clickedEvent.eventid}`
         axios.get(serverURL).then((resp)=>{
            setGiftsArr(resp.data)
         })
         
 
     }
 
     useEffect(() => {
         SendReq();
     }, [])

     const handleDelete = async (item) => {
        setClickedItem(item);
        axios.delete(`${process.env.REACT_APP_serverURL}gift/${props.clickedEvent.eventid}?id=${clickedItem.id}`)
        .then((resp)=>{
           setGiftsArr(resp.data) 
        })
        
    }
    return (

        <div>
            <Row xs={1} md={4} className="g-4">
                {giftsArr.map((item) => {
                    return ( 
                        <Col key={item.gift_image} >
                            <Card style={{ width: '18rem', backgroundColor: 'gray' }}>
                                <Card.Img variant="top" src={`${item.gift_image}`} />
                                <Card.Title>{item.gift_title}</Card.Title>
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