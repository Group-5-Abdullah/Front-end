import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

function Gift (props){
    const [showFlag,setShowFlag]=useState(false);
    function modalExpose(){
        setShowFlag(true);
    }
    const handleClose = () => {
        setShowFlag(false);
      };
    return(
        <div>
        <Card key={props.item.gift_title}>
            <Card.Title>{props.item.gift_title}</Card.Title>
            <Card.Img src={props.item.gift_image} variant='top'></Card.Img>
            <Card.Footer>
                 <p><b>price:</b>{props.item.gift_price}</p>
                 <Button variant="success" onClick={() => {
            
            }}>Add to cart</Button>
            </Card.Footer>


        </Card>
        
        </div>
    )}
    
export default Gift;    
