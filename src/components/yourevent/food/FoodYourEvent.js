

import { useEffect, useState } from "react";
// import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// import axios from 'axios';
import { Card } from 'antd';



import React from 'react'
// function useForceUpdate() {
//     const [value, setValue] = useState(0);
//     return () => setValue(value => value + 1)
// }
export default function FoodYourEvent(props) {
    const { Meta } = Card;

    const [foodArray, setFoodArray] = useState([]);
    // const forceUpdate = useForceUpdate();
    const serverURL = `${process.env.REACT_APP_serverURL}food?eventid=${props.clickedEvent.eventid}`;

    // console.log(serverURL)
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
    }, [foodArray])


    return (
        <Row xs={1} md={4} className="g-4">
            {foodArray.map((item) => {
                return (
                    <Col key={item.id} >
                    
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img width={"100%"} alt="example" src={item.food_image} />}
                        >
                            
                            {item.food_title}
                            <Meta />
                            <br />
                            <Button variant="danger" style={{ width: '100%' }} onClick={()=>{deleteFood(item.id)}}>Delete</Button>
                        </Card>

                    </Col>)
            })}
        </Row>
    )
}

