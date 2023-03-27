

import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// import axios from 'axios';

// function useForceUpdate() {
//     const [value, setValue] = useState(0);
//     return () => setValue(value => value + 1)
// }
export default function FoodYourEvent(props) {
    
    const [foodArray, setFoodArray] = useState([]);
    // const forceUpdate = useForceUpdate();
    const serverURL = `${process.env.REACT_APP_serverURL}food?eventid=${props.clickedEvent.eventid}`;
    
    console.log(serverURL)
    const fetchData = () => {
        fetch(serverURL)
            .then(res => res.json())
            .then(data => {
                setFoodArray(data)

            })

            .catch((err) => {
                console.log(err);
            })

    }

// .....      delete food   .......................................................
       const deleteFood = (id) => {
        
        const deleteURL = `${process.env.REACT_APP_serverURL}food?id=${id}&eventid=${props.clickedEvent.eventid}` 
        fetch(deleteURL, { method: 'DELETE' })
            .then((res) => {
                res.json()
            })
            .then(() => fetchData())

            .catch((err) => {
                console.log(err);
            })

    }




useEffect(() => {
    fetchData();
    // forceUpdate()
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

                        <Button variant="danger" onClick={()=>{deleteFood(item.id)}}>delete </Button>

                    </Card>
                </Col>)
        })}
    </Row>
)
}

