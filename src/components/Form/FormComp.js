import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



export default function FormComp() {

    const [showForm, setShowForm] = useState(false)
    const [user_email, setUserEmail] = useState('')


    
    const addToDBURL = `${process.env.REACT_APP_serverURL}events`;
    const getData_URL = `${addToDBURL}/${localStorage.getItem('user_email')}`
    
    console.log(getData_URL)
    console.log(user_email)


    

    //    save to database  ..................................................................
    const saveToDB = async (e) => {
        setUserEmail(localStorage.getItem('user_email'))
        e.preventDefault();
        const formData = {
            event: e.target.event.value,
            location: e.target.location.value,
            date: e.target.date.value,
            description: e.target.description.value,
            user_email: localStorage.getItem('user_email')
        }

        const reqOption = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "event": formData.event,
                "location": formData.location,
                "date": formData.location,
                "description": formData.description,
                "user_email": formData.user_email
            })
        }

        fetch(addToDBURL, reqOption)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch((err) => {
                console.log(err);
            })

        eventForm()
        
    }
    //   show form function ............................................
    const eventForm = () => {
        setShowForm(!showForm);

    };

    
    



return (
    <div >
        <h3>start yor event by creating new one !</h3>
        <Button variant="primary" onClick={eventForm}>create your event</Button>
        {/*  ........        form part    ................................................................. */}
        <Modal show={showForm} onHide={eventForm} >
            <Modal.Header closeButton>
                <Modal.Title>start you'r event</Modal.Title>
            </Modal.Header>

            <Form onSubmit={saveToDB}>

                <Form.Group className="mb-3" >
                    <Form.Label> your event</Form.Label>
                    <Form.Control type="text" name="event" />

                    <Form.Label> event location</Form.Label>
                    <Form.Control type="text" name="location" />

                    <Form.Label> event date</Form.Label>
                    <Form.Control type="text" name="date" />

                    <Form.Label> description</Form.Label>
                    <Form.Control type="text" name="description" />

                </Form.Group>

                <Modal.Footer>
                    <Button variant="secondary" onClick={eventForm}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" >  {/* nedd 2 fun event form and save to db*/}
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal><br /><br />
        {/*  ...............       rendering part .............................................................. */}

        
        
        
        

    </div >
)
}



