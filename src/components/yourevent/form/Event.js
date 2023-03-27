
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
// import YouEventModal from './YourEventModal';

export default function Event(props){
      

       
       const arr = ['event id', 'event', 'location', 'date', 'description', 'user email']
       const addToDBURL = `${process.env.REACT_APP_serverURL}events`;
       const getData_URL = `${addToDBURL}/${localStorage.getItem('user_email')}`
       const [dataArray, setDataArray] = useState([])


//   get data  .....................................................
       const fetchData = () => {
        fetch(getData_URL)
            .then(res => res.json())
            .then(data =>{
                setDataArray(data)

            } )

            .catch((err) => {
                console.log(err);
            })

    }

    
    useEffect(() => {
        fetchData();
    }, [])

//    delete an event  .......................................................
       const deleteEvent = (id) => {
        const deleteURL = `${addToDBURL}/${id}`
        console.log(deleteURL)
        fetch(deleteURL, { method: 'DELETE' })
            .then((res) => {
                res.json()
                alert('event wase deleted')
            })
            .then(() => fetchData())

            .catch((err) => {
                console.log(err);
            })

    }
    
    const seeEventDetails=(id)=>{
          console.log('event details');
    }


    return (
        <>
         <h4> you can see what event you have in the table </h4>
         {dataArray.length ? (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        {arr.map((item,i) => (
                            <th key={i}>{item}</th>
                        ))}
                        <th key={arr.length}>delete</th>
                    </tr>
                </thead>
                <tbody>

                    {dataArray.map((item) => (
                        <tr>
                             <td>{item.eventid}</td> 
                             <td>{item.event}</td>
                             <td>{item.location}</td>
                             <td>{item.date}</td>
                             <td>{item.description}</td>
                             <td>{item.user_email}</td>
                             <td> <Button variant="primary" onClick={() => { seeEventDetails(item.id) }}>see event details</Button></td>
                             <td> <Button variant="danger" onClick={() => { deleteEvent(item.id) }}>delete event</Button></td> 
                         </tr>
                    ))}
                </tbody>
            </Table>
        ) : <></>
        } 
        {/* <YouEventModal showFlag={showFlag} clickedEvent={clickedEvent} handleclose={handleclose}/> */}
        </>
    )
}