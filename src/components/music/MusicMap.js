import Row from 'react-bootstrap/Row';
import MusicCard from './MusicCard';
import { useAuth0 } from "@auth0/auth0-react";
import Container from 'react-bootstrap/Container';
export default function MusicMap (props){
    const { user } = useAuth0();
    
    return (
        <Container>
           
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