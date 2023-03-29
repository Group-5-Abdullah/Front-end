
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import FlowerModal from './FlowerModal';
import './Flower.css';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import SideBarComp from '../SideBarComp';
function Flower() {
    const [flowersArr, setflowersArr] = useState([]);

    const [clickedItem, setClickedItem] = useState({})

    const SendReq = async () => {
        const serverURL = `${process.env.REACT_APP_serverURL}flowerslist`
        const res = await fetch(serverURL);
        const flowersData = await res.json();

        setflowersArr(flowersData);

    }

    useEffect(() => {
        SendReq();
    }, [flowersArr])


    const [showFlag, setShowFlag] = useState(false);
    function modalExpose(item) {
        setShowFlag(true);
        setClickedItem(item);
    }
    const handleClose = () => {
        setShowFlag(false);
    };
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




    return (
        <div className="container" style={{ fontFamily: "Georgia", backgroundColor: 'rgba(255, 255, 255, 0.471)' }}  >
            <SideBarComp/>
            <div className="overlayFlower">
                <Row xs={1} md={4} className="g-4">
                    {flowersArr.map((item) => {
                        return (
                            <div className="Col" key={item.name} >

                                <Card className='flower-card' style={{ width: '18rem', backgroundColor: 'white' }}>
                                    <Card.Img className="card-img-top" height={'250px'} variant="top" src={`${item.photo}`} />
                                    <Card.Header>{item.name}</Card.Header>
                                    <Button className="btn btn-primary" onClick={() => {
                                        if (isAuthenticated && chooseArr.length) {
                                            modalExpose(item);
                                        } else if (isAuthenticated&&!chooseArr.length) {
                                            alert("Add your event first!!!")
                                        } else if (!isAuthenticated) {
                                            loginWithRedirect()
                                        }
                                    }}>
                                        Add to your Event </Button>
                                    <FlowerModal showFlag={showFlag} handleClose={handleClose} item={clickedItem} />
                                </Card>
                            </div>)
                    })}
                </Row></div>
        </div>

    )
}

export default Flower;