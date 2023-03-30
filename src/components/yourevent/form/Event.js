
import Table from 'react-bootstrap/Table';


export default function Event(props){

    const event=props.clickedEvent
    const arr = [ 'event', 'location', 'date', 'description']
   

    return (
        
         
         
            <Table striped bordered hover size="sm">
      
                <thead>
                    <tr>
                        {arr.map((item,i) => (
                            <th key={i}>{item}</th>
                        ))}
                        
                    </tr>
                </thead>
                <tbody>                    
                        <tr>
                            
                             <td>{event.event}</td>
                             <td>{event.location}</td>
                             <td>{event.date}</td>
                             <td>{event.description}</td>
                           
                             
                         </tr>
                </tbody>
            </Table>    
    
)}