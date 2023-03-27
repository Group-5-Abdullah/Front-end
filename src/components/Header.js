
import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'; 
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Navbar bg="bisque" expand="lg">
      <Container>
        <Navbar.Brand style={{ fontSize: "45px", fontFamily: "Georgia" , fontweight: "bolder" }}>Celebrate Pro</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav style={{ fontFamily: "Georgia" , fontweight: "bolder" , color: "rgb(0, 0, 0);" }} className="ms-auto">
            <Nav.Link as={Link} to="/home" activeClassName="active-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/yourevent" activeClassName="active-link">My Event</Nav.Link>
            <Nav.Link as={Link} to="/readypackages" activeClassName="active-link">Our designs</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" activeClassName="active-link">About Us</Nav.Link>
            <Nav.Link  style={{ fontFamily: "Georgia" }} >
              {isAuthenticated ? (
                <span onClick={() => logout()} className="auth-link">Logout</span>
              ) : (
                <span onClick={() => loginWithRedirect()} className="auth-link">Login</span>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}