import React from "react";
import './AboutUs.css';
import { Card } from 'antd';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import abdelrahmanImg from './../../images/abdelrahmanImg.jpg' 



function AboutUs() {
    const { Meta } = Card;
    const arr=[{name:"Abdelrahman Elatrash",img:abdelrahmanImg},{name:"Abdullah Shaghnoba",img:""},{name:"Sara Alkhateeb",img:""},{name:"Abdulkareem Abunabhan",img:""},{name:"Amer Al-Omari",img:""}];
    return (
        <>
            <div id="aboutus">

                <h1 >Turning a Vision into Reality</h1>
             
                <p> Creating gorgeous events that people will remember for a lifetime is what we do best.
                    We are story tellers. We are a boutique planning and coordination company,
                    here to execute your plans and streamline your event so you can sit back, relax, and enjoy yourself!
                    We have been in business since 2005 and have been involved in over 350 weddings!
                    In 2012 and 2015 we were voted Best Wedding Planner by the Arizona Foothills Magazine - Best of Our Valley.
                    We pride ourselves in being easily accessible and available to our clients and working with honesty and integrity.
                    Whether you are getting married or preparing for any special event, 
                    it should be a celebration that you cherish forever!
                    At A Day to Cherish, we specialize in memorable events!</p>
            </div>
            <Row xs={1} md={3} className="g-4">
            {arr.map((item) => (
            <Col>
            <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={item.img} />}>
                    
                    <Meta title={item.name}  />
                    
                </Card>
                </Col>
                ))}
                </Row>

            </>
    )
}
export default AboutUs;