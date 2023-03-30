import Row from 'react-bootstrap/Row';
import MusicCard from './MusicCard';

import Container from 'react-bootstrap/Container';
export default function MusicMap (props){

    
    return (
        <Container>
             <br/>
      <br/>
      <br/>
      <br/>
      <br/>
             <Row xs={1} md={4} className="g-4">
            {  props.fetchRes.map((element)=>{
                  return(
                    
            <MusicCard key={element.track_url} music={element} />
         
            )
              })}
              </Row>
              </Container>
    )
}