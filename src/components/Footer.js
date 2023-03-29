import { ReactComponent as Logo } from "./../images/logo2.svg";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <div id='Footer'>
        
      <Container fluid>
      
        <Row className='justify-content-center'>
          <Col sm={12} md={4}>
            <p style={{fontSize: "15px"} } >&copy; Celebrate Pro App 2023 </p>
          </Col>
          <Col sm={12} md={4}>
            <p>00962799113399-Amman.Jordan</p>
          </Col>
          <Col sm={12} md={4}>
            <div className='social-icons'>
              <a href="https://www.facebook.com/celbreto Pro">
                <FontAwesomeIcon icon={faFacebookF} style={{ color: 'black'  }} />
              </a>
              <a href="https://twitter.com/celbreto Pro">
                <FontAwesomeIcon icon={faTwitter} style={{ color: 'black' }} />
              </a>
              <a href="https://www.instagram.com/celbreto Pro">
                <FontAwesomeIcon icon={faInstagram} style={{ color: 'black' }} />
              </a>
            </div>
          </Col>
        </Row>
        
      </Container>
      <Logo style={{ width: '80px', height: '80px' }} />
    </div>
  );
}
export default Footer