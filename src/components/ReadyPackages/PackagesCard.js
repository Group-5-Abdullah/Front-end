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





    return (

        <div>
            <SideBarComp />

            <Col >
                <Card >

                    <Card.Body style={{ fontFamily: "Georgia",height:"200vh",display:"flex",flexDirection:"column" ,alignItems:"space-between" }} >

                        <h3 style={{ color: 'black' }} >{`Design info`}</h3>
                        <Card.Text style={{ color: 'black', height:"250px" }} >
                            {`Gift Name: ${props.package.gift_title} `}
                        </Card.Text>
                        <Card.Img height={'250px'} variant="top" src={`${props.package.gift_image} `} />
                        <Card.Text style={{ color: 'black', height:"250px" }} >
                            {`Gift Price : ${props.package.gift_price}`}
                        </Card.Text>
                        <Card.Text style={{ color: 'black', height:"250px" }} >
                            {` ${props.package.flower_name}`}
                        </Card.Text>
                        <Card.Img height={'250px'} variant="top" src={`${props.package.flower_image} `} />
                        <br/>
                        <br/>
                        <Card.Img height={'250px'} variant="top" src={`https://img.freepik.com/free-vector/elegant-musical-notes-music-chord-background_1017-20759.jpg`} />

                        <Card.Text style={{ color: 'black', height:"250px" }} >{`Song Title : ${props.package.track_name}`}</Card.Text>
                        <Card.Text style={{ color: 'black',height:"250px" }} >
                            <a href={props.package.track_url}>{props.package.track_name}</a>
                        </Card.Text>
                        <Card.Text style={{ color: 'black', height:"250px" }} >
                            {`Artist Name : ${props.package.artist_name}`}
                        </Card.Text>
                        <Card.Text style={{ color: 'black',height:"250px" }} >
                            {`${props.package.food_title}`}
                        </Card.Text>
                        <Card.Img height={'250px'} variant="top" src={`${props.package.food_image} `} />
                        <Button variant="light" border="black" style={{width:"100%",alignSelf:"flex-end" ,backgroundColor:"#88c070"}}  onClick={() => {
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