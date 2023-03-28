
import React, { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
import FlowerModal from './FlowerModal';
import './Flower.css';

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
    }, [])


    const [showFlag, setShowFlag] = useState(false);
    function modalExpose(item) {
        setShowFlag(true);
        setClickedItem(item);
    }
    const handleClose = () => {
        setShowFlag(false);
    };




    return (

        <div className="container" >
            <div className="overlayflower">
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-4">
                    {flowersArr.map((item) => {
                        return (
                            <div className="col" key={item.name} >

                                <div className="card border-secondary flower-card"></div>
                                <img  src={`${item.photo}`} className="card-img-top" alt ={item.name}/>
                                <div className="card-body">
                                    <h5 style={{ fontFamily: "Georgia" }} className="card-title">{item.name}</h5>

                                    <button type="button"  style={{ fontFamily: "Georgia" }} className="btn btn-primary" onClick={() => {
                                        modalExpose(item);
                                    }}>
                                        Add to your Event </button>
                                    <FlowerModal showFlag={showFlag} handleClose={handleClose} item={clickedItem} />

                                </div> </div>)
                    })}
                </div>
            </div>
        </div >

    )
}

export default Flower;