import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import GiftModal from "./GiftModal";
function ChooseModal(props) {
  const [clickedItem, setClickedItem] = useState();
  const [showFlag, setShowFlag] = useState(false);
  function modalExpose(item) {
    setClickedItem(item);
    setShowFlag(true);
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
  }
  useEffect(() => {
    getReq();
  }, [chooseArr])
  return (
    <Modal
      size="lg"
      show={props.showFlag}
      onHide={props.handleClose}
      aria-labelledby="example-modal-sizes-title-lg"
      key={props.item.gift_title}
    >
      <Modal.Header closeButton>
        <Modal.Title>Choose your Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row xs={1} md={4} className="g-4">
          {chooseArr.map((item) => {
            return (
              <Col key={item.eventid}>
                <Button variant="primary" onClick={() => { modalExpose(item) }}>
                  {item.event}
                  <Card >
                  </Card>
                  {item.date}
                  <Card >
                  </Card>
                  {item.description}

                </Button>
                <GiftModal showFlag={showFlag} handleClose={handleClose}
                  gift={props.item} key={item.eventid} item={clickedItem} />
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
export default ChooseModal;
