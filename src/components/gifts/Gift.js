import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

import ChooseModal from './ChooseModal';
import SideBarComp from '../SideBarComp';



function Gift (props){
    const [showFlag,setShowFlag]=useState(false);
    function modalExpose(){
        setShowFlag(true);
    }
    const handleClose = () => {
        setShowFlag(false);
      };
    return(
        <div >
            
            <SideBarComp/>
            

            <div style={{ zIndex:"3", alignContent:"space-around" ,textAlign:"center" , maxWidth:"90%"}}>

        <Card key={props.item.gift_title} >
            <Card.Title>{props.item.gift_title}</Card.Title>
            <Card.Img src={props.item.gift_image} variant='top'></Card.Img>

            <Card.Footer>
                 <p><b>price:</b>{props.item.gift_price}</p>
                 <Button variant="success" onClick={() => {modalExpose()}}>Add to cart</Button>
            </Card.Footer>
            <ChooseModal showFlag={showFlag} handleClose={handleClose}
                        item={props.item} key={props.item.gift_title}/>
            
            </Card>
            </div>



       
        
        </div>
    )}
    
export default Gift;    
