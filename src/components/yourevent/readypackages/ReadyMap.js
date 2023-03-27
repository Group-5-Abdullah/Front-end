import Row from 'react-bootstrap/Row';


import Container from 'react-bootstrap/Container';
import ReadyCard from './ReadyCard';

export default function ReadyMap (props){

    const setDELETEDArr = (Arr) => {
        props.setDELETEDArr(Arr)
     }
    
    return (
        <Container>
           
             <Row xs={1} md={4} className="g-4">
            {  props.fetchRes.map((element)=>{
                  return(
                    
            <ReadyCard setDELETEDArr={setDELETEDArr} clickedEvent={props.clickedEvent} key={element.track_url} packageEvent={element} />
         
            )
              })}
              </Row>
              </Container>
    )
}