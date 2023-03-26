import { React } from "react"; 
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Header (){
    return (
        <div>
             <Navbar bg="dark" variant="dark">
        <Container style={{display:"flex"}}>
          <Navbar.Text >Celebrate Pro</Navbar.Text>
          <Nav  className="me-auto" style={{display:"flex"}}>
            <Link to='/home' >Home</Link>
            <Link to='/yourevent' >Your Event</Link>
            <Link to ="/readypackages">Get Your Ready Package!</Link>
            <Link to='/aboutus' >About Us</Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}