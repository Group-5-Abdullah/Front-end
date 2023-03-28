import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import React from 'react'
import ReadyModal from './ReadyModal';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import SideBarComp from '../SideBarComp';

export default function PackagesCard(props) {

    const [chooseArr, setChooseArr] = useState([]);
    const user_email = localStorage.getItem("user_email");
    const serverUrl = `${process.env.REACT_APP_serverURL}events/${user_email}`;
    const getReq = () => {
        axios.get(serverUrl).then((resp) => {
            setChooseArr(resp.data);
        });
    };
    useEffect(() => {
        getReq();
    }, [chooseArr]);
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();
    if (isAuthenticated) {
        localStorage.setItem("user_email", user.email);
    }

    const [showFlag, setShowFlag] = useState(false);
    function modalExpose() {
        setShowFlag(true);
    }
    const handleClose = () => {
        setShowFlag(false);
    };




    // const style1 = { backgroundColor: '#0dcaf0bd' };
    // const style2 = { width: '18rem' };


    return (

        <div>
            <SideBarComp />

            <Col >
                <Card >

                    <Card.Body style={{ fontFamily: "Georgia" }} >

                        <h3 style={{ color: 'black' }} >{`Design info`}</h3>
                        <Card.Text style={{ color: 'black' }} >
                            {`Gift Name: ${props.package.gift_title} `}
                        </Card.Text>
                        <Card.Img height={'250px'} variant="top" src={`${props.package.gift_image} `} />
                        <Card.Text style={{ color: 'black' }} >
                            {`Gift Price : ${props.package.gift_price}`}
                        </Card.Text>
                        <Card.Text style={{ color: 'black' }} >
                            {` ${props.package.flower_name}`}
                        </Card.Text>
                        <Card.Img height={'250px'} variant="top" src={`${props.package.flower_image} `} />
                        <Card.Text style={{ color: 'black' }} >{`Song Title : ${props.package.track_name}`}</Card.Text>
                        <Card.Text style={{ color: 'black' }} >
                            <a href={props.package.track_url}>{props.package.track_name}</a>
                        </Card.Text>
                        <Card.Text style={{ color: 'black' }} >
                            {`Artist Name : ${props.package.artist_name}`}
                        </Card.Text>
                        <Card.Text style={{ color: 'black' }} >
                            {`Artist Name : ${props.package.food_title}`}
                        </Card.Text>
                        <Card.Img height={'250px'} variant="top" src={`${props.package.food_image} `} />
                        <Button variant="light" border="black" onClick={() => {
                            if (isAuthenticated && chooseArr.length) {
                                modalExpose();
                            } else if (isAuthenticated && !chooseArr.length) {
                                alert("Add your event first!!!")
                            } else if (!isAuthenticated) {
                                loginWithRedirect()
                            }
                        }}>add to your event</Button>
                        <ReadyModal showFlag={showFlag} handleClose={handleClose} Ready={props.package} />
                    </Card.Body>
                </Card>
            </Col>

        </div>
    )
}