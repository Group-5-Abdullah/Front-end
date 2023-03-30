import Row from 'react-bootstrap/Row';
import PackagesCard from './PackagesCard'
import { useAuth0 } from "@auth0/auth0-react";
import Container from 'react-bootstrap/Container';
export default function PackagesMap (props){
    const { user } = useAuth0();
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
                    
            <PackagesCard key={element.gift_title} package={element} />
         
            )
              })}
              </Row>
              </Container>
    )
}