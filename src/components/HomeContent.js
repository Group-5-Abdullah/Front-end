
import React from 'react';
import './HomeContent.css';
import { Container, Row, Col } from 'react-bootstrap';

function HomeContent(props) {
    return (
        <div className="home-container" style={{ fontFamily: "Georgia" }}>
            <Container>
            <div className="home-content">
                <div className="overlay">
                <Row>
                    <Col>
                    
                        <h1>Planning</h1>
                        <p>We connect you with the wedding professionals who fit your budget, needs, and unique personality.
                            You will save valuable time, energy, and money with our tried and true tools for managing your budget, checklist, and timeline.</p>
                    </Col>
                    <Col>
                        <h1 style={{ backgroundcolor: "white" }} >Design </h1>
                        <p>Whether your vision is rooted in tradition or inspired by current trends, we have resources to infuse your celebration with charisma.
                            We build a unique experience around your style and personality that won’t be forgotten! Our clients are not a template or online management system but a one on one boutique planning process that works best for you and your lifestyle. </p>
                    </Col>
                    <Col>
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
