import Row from 'react-bootstrap/Row';


import Container from 'react-bootstrap/Container';

export default function ReadyMap (props){

    const setDELETEDArr = (Arr) => {
        props.setDELETEDArr(Arr)
     }
    
    return (
        <Container>
           
             <Row xs={1} md={4} className="g-4">
            {  props.fetchRes.map((element)=>{
                  return(
                    
            <MusicEv setDELETEDArr={setDELETEDArr} key={element.track_url} packageEvent={element} />
         
            )
              })}
              </Row>
              </Container>
    )
}