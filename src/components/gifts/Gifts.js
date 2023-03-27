import axios from "axios";
// import Card from 'react-bootstrap/Card'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Gift from "./Gift";
import { useEffect,useState } from "react";
function Gifts() {
    const [datafromApi, setDatafromApi] = useState([]);

  const serverUrl = `${process.env.REACT_APP_serverURL}gifts`;
  const sendReq= ()=>{axios.get(serverUrl).then((resp) => {
    setDatafromApi(resp.data)
})};
useEffect(()=>{
    sendReq()

},[]);




  return (
    <Row xs={1} md={4} className="g-4">
      {datafromApi.map((item) => {
        return (
          <Col key={item.gift_title}>
            <Gift item={item} />
          </Col>
        );
      })}
    </Row>
  );
}
export default Gifts;
