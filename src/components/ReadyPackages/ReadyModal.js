import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from 'react';
import axios from "axios";



export default function ReadyModal(props) {


 

    const [chooseArr, setChooseArr] = useState([]);
    const user_email = localStorage.getItem("user_email");
    const serverUrl = `${process.env.REACT_APP_serverURL}events/${user_email}`;
    const getReq = () => {
        axios.get(serverUrl).then((resp) => {
            setChooseArr(resp.data);
        });
    }
    useEffect(() => {
        getReq();
    }, [])




    const fetchRes = async (item) => {
        await fetch(`${process.env.REACT_APP_serverURL}readyPackeges`, {

            method: 'POST',
            body: JSON.stringify({
                user_email: user_email,
                gift_title: props.Ready.gift_title,
                gift_image: props.Ready.gift_image,
                gift_price: props.Ready.gift_price,
                flower_image: props.Ready.flower_image,
                flower_name: props.Ready.flower_name,
                track_name: props.Ready.track_name,
                track_url: props.Ready.track_url,
                aritst_name: props.Ready.artist_name,
                food_title: props.Ready.food_title,
                food_image: props.Ready.food_image,
                eventid: item.eventid
            }
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }

    return (
        <Modal
            size="lg"
            show={props.showFlag}
            onHide={props.handleClose}
            aria-labelledby="example-modal-sizes-title-lg"
            key={props.Ready.track_url}
        >
            <Modal.Header closeButton>
                <Modal.Title>Choose your Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row xs={1} md={4} className="g-4">
                    {chooseArr.map((item) => {
                        return (
                            <Col key={item.eventid}>
                                <Card>
                                    <Card.Title>{item.event}</Card.Title>
                                    <Card.Body>
                                        <p>
                                            <b>descreption:</b>
                                            {item.description}
                                        </p>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button variant="primary" onClick={() => {
                                            fetchRes(item);
                                            props.handleClose();
                                        }}>
                                            Submit
                                        </Button>

                                    </Card.Footer>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}