import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';



import React from 'react'


export default function ReadyCard(props) {
  
    const handleDelete = async () => {
       
        const requestOptions = {
            method: 'DELETE',
           
        };
        
        const res = await fetch(`${process.env.REACT_APP_serverURL}readyPackeges/${props.clickedEvent.eventid}?id=${props.packageEvent.id}`, requestOptions);
        const Data = await res.json();
       
        props.setDELETEDArr(Data)
    }

    const style1 = { backgroundColor: '#0dcaf0bd' };
    const style2 = { width: '18rem' };

    return (
        <div>

<Col key={props.packageEvent.gift_image}>
    <Card border="danger" style={{ ...style1, ...style2 }} >

        <Card.Body>

            <Card.Header style={{ color: 'black' }} >{`Pick one :) `}</Card.Header>
            <Card.Text style={{ color: 'black' }} >
                {`Gift Name: ${props.packageEvent.gift_title} `}
            </Card.Text>
            <Card.Img height={'250px'} variant="top" src={`${props.packageEvent.gift_image} `} />
            <Card.Text style={{ color: 'black' }} >
                {`Gift Price : ${props.packageEvent.gift_price}`}
            </Card.Text>
            <Card.Text style={{ color: 'black' }} >
                {` ${props.packageEvent.flower_name}`}
            </Card.Text>
            <Card.Img height={'250px'} variant="top" src={`${props.packageEvent.flower_image} `} />
            <Card.Text style={{color:'black'}} >{`Song Title : ${props.packageEvent.track_name}`}</Card.Text>
                    <Card.Text style={{color:'black'}} >
                    <a href={props.packageEvent.track_url}>{props.packageEvent.track_name}</a>
                    </Card.Text>
                    <Card.Text style={{color:'black'}} >
                        {`Artist Name : ${props.packageEvent.aritst_name}`}
                    </Card.Text>
                    <Button variant="danger" style={{width:'50%'}} onClick={() => { handleDelete() ;}}>Delete</Button>
        </Card.Body>
    </Card>
</Col>

</div>


      
    )
}