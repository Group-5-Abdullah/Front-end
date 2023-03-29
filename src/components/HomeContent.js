
// import React from 'react';
// import './HomeContent.css';
// import Carousel from 'react-bootstrap/Carousel';

// function HomeContent(props) {
//     return (



//             <Carousel style={{ marginRight: '0', marginLeft: '0' }}>
//                 <Carousel.Item>
//                     <img style={{ width: '100%', height: '500px' }}
//                         className="d-block w-100"
//                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI71WlNT7kMohWUV3-l6Q1vEiBuIh2_7bQGw&usqp=CAU"
//                         alt="First slide"
//                     />
//                     <Carousel.Caption style={{ bottom: '200px' }}>
//                         <h1 style={{ color: 'black' }}>Planning</h1>
//                         <p style={{ color: 'black' }}>We connect you with the wedding professionals who fit your budget, needs, and unique personality.
//                             You will save valuable time, energy, and money with our tried and true tools for managing your budget, checklist, and timeline.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img style={{ width: '100%', height: '500px' }}
//                         className="d-block w-100"
//                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI71WlNT7kMohWUV3-l6Q1vEiBuIh2_7bQGw&usqp=CAU"
//                         alt="Second slide"
//                     />

//                     <Carousel.Caption style={{ bottom: '200px' }}>
//                         <h1 style={{ color: 'black' }} >Design </h1>
//                         <p style={{ color: 'black' }}>Whether your vision is rooted in tradition or inspired by current trends, we have resources to infuse your celebration with charisma.
//                             We build a unique experience around your style and personality that won’t be forgotten! Our clients are not a template or online management system but a one on one boutique planning process that works best for you and your lifestyle. </p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img style={{ width: '100%', height: '500px' }}
//                         className="d-block w-100"
//                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI71WlNT7kMohWUV3-l6Q1vEiBuIh2_7bQGw&usqp=CAU"
//                         alt="Third slide"
//                     />

//                     <Carousel.Caption style={{ bottom: '200px' }}>
//                         <h1 style={{ color: 'black' }}>Coordination</h1>
//                         <p style={{ color: 'black' }}>Being the host of your event and the guest of honor is plenty for one day! We take pride in being your advocate in every detail!
//                             We will take care of your vendor check in and communication, timeline creation and execution, and any decor or event set up!</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             </Carousel>

//     );
// }

// export default HomeContent;

import React from 'react';
import './HomeContent';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPalette, faUsers } from '@fortawesome/free-solid-svg-icons';


function HomeContent(props) {
    return (
        <div className="home-container" >
            <Container>
                <div >
                    <div className="overlay">
                        <Row style={{ backgroundImage: 'https://img.freepik.com/free-photo/closeup-shot-beautiful-flower-composition-wedding-ceremony_181624-12383.jpg?size=626&ext=jpg&ga=GA1.2.239787390.1679835303&semt=ais' }} >
                            <Col className="item">
                                <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '10px' }} />
                                <h1>Planning</h1>
                                <p>We connect you with the wedding professionals who fit your budget, needs, and unique personality.
                                    You will save valuable time, energy, and money with our tried and true tools for managing your budget, checklist, and timeline.</p>
                            </Col>
                            <Col className="item">
                                <FontAwesomeIcon icon={faPalette} style={{ marginRight: '10px' }} />
                                <h1  >Design </h1>
                                <p>Whether your vision is rooted in tradition or inspired by current trends, we have resources to infuse your celebration with charisma.
                                    We build a unique experience around your style and personality that won’t be forgotten! Our clients are not a template or online management system but a one on one boutique planning process that works best for you and your lifestyle. </p>
                            </Col>
                            <Col className="item" >
                                <FontAwesomeIcon icon={faUsers} />
                                <h1>Coordination</h1>
                                <p>Being the host of your event and the guest of honor is plenty for one day! We take pride in being your advocate in every detail!
                                    We will take care of your vendor check in and communication, timeline creation and execution, and any decor or event set up!</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
            </div>
    );
}

export default HomeContent;
