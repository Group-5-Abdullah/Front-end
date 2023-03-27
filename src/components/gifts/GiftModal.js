import React from "react";
import { Button, Modal, Form, Image } from "react-bootstrap";
import axios from "axios";

function GiftModal(props) {
  const user_email = localStorage.getItem("user_email");

  // Send a request to add the gift to the event
  const sendReq = async (e) => {
    e.preventDefault();
    const obj = {
      gift_title: e.target.gift_title.value,
      gift_image: props.gift.gift_image,
      gift_price: e.target.gift_price.value,
      gift_quantity: e.target.gift_quantity.value,
      user_email: user_email,
      eventid: props.item.eventid,
    };

    try {
      const serverURL = `${process.env.REACT_APP_serverURL}gift`;
      await axios.post(serverURL, obj);
      props.handleClose();
    } catch (err) {
      console.error(err);
      // Handle the error here
    }
  };

  return (
    <Modal
      size="lg"
      show={props.showFlag}
      onHide={props.handleClose}
      aria-labelledby="example-modal-sizes-title-lg"
      key={props.gift.gift_title}
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.gift.gift_title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={props.gift.gift_image} width="100%" />
        <Form onSubmit={sendReq}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>title</b>
            </Form.Label>
            <Form.Control
              name="gift_title"
              type="text"
              readOnly
              value={props.gift.gift_title}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <b>price:</b>
            </Form.Label>
            <Form.Control
              name="gift_price"
              type="text"
              value={props.gift.gift_price}
              readOnly
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <b>quentity</b>
            </Form.Label>
            <Form.Control name="gift_quantity" type="text" defaultValue="" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GiftModal;