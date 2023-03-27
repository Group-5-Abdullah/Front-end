import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// import axios from 'axios';

function useForceUpdate(){
    const [value, setValue] = useState(0); 
    return () => setValue(value => value + 1)
}
export default function FoodYourEvent(props) {
    console.log(props)
    console.log(props.clickedEvent.eventid);
    const [foodArray, setFoodArray] = useState([]);
        const serverURL = `${process.env.REACT_APP_serverURL}food?eventid=${props.clickedEvent.eventid}`
        console.log(serverURL)
        const fetchData = () => {
            fetch(serverURL)
                .then(res => res.json())
                .then(data =>{
                    setFoodArray(data)
    
                } )
    
                .catch((err) => {
                    console.log(err);
                })
    
        }

        // axios.get(serverURL)
        // .then((result) => {
        //     let foodData = result.data
        //     setFoodArray(foodData);
        //     console.log(foodData)
        // })
        // .catch((err) => {
        //     console.log(err);
        //   });

    
    const forceUpdate = useForceUpdate()
    useEffect(() => {
        fetchData();
        forceUpdate()
    }, [])
    
    console.log(foodArray)
    return (
        <Row xs={1} md={4} className="g-4">
            {foodArray.map((item) => {
                return (
                    <Col key={item.id} >
                        <Card style={{ width: '18rem', backgroundColor: 'gray' }}>
                            <Card.Img variant="top" src={`${item.food_image}`} />
                            <Card.Title>{item.food_title}</Card.Title>

                            <Button variant="primary" onClick="">delete </Button>

                        </Card>
                    </Col>)
            })}
        </Row>
    )
}