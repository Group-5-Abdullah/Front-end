import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import axios from "axios";
function GiftModal(props){
    const user_email=localStorage.getItem('user_email')
    const sendReq = async (e) => {
        e.preventDefault();
        const obj = {
          gift_title: e.target.gift_title.value,
          gift_image: props.item.gift_image,
          gift_price: e.target.gift_price.value,
          gift_quantity:e.target.gift_quantity.value,
          user_email: user_email,
          eventid:props.eventid
        };
        
          const serverURL = `${process.env.REACT_APP_serverURL}gift`;
          axios.post(serverURL, obj).then(() => {
            props.handleClose();
          });
       
      };
    return(
        <Modal
        size="lg"
        show={props.showFlag}
        onHide={props.handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
        key={props.item.gift_title}
      ><Modal.Header closeButton>
      <Modal.Title>{props.item.gift_title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Image
        src={props.item.gift_image}
        width="100%"
      ></Image>
      <Form onSubmit={sendReq}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>title</b>
          </Form.Label>
          <Form.Control name="gift_title" type="text" readOnly value={props.item.gift_title} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            <b>price:</b>
          </Form.Label>
          <Form.Control
            name="gift_price"
            type="text"
            value={props.item.gift_price}
            readOnly
          />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            <b>quentity</b>
          </Form.Label>
          <Form.Control
            name="gift_quantity"
            type="text"
            defaultValue=""
          />
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
    </Modal.Footer></Modal>
    )
}
export default GiftModal;