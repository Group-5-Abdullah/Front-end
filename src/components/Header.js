
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { useAuth0 } from "@auth0/auth0-react";
import { ReactComponent as Logo } from "./../images/logo2.svg";

export default function Header() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);
  if (isAuthenticated) {
    localStorage.setItem('user_email', user.email);
  }
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  }



  return (<>
    <Navbar bg="bisque" expand="lg" style={{
      color: '#EEE8AA', position: "fixed", zIndex: 999, top: 0, width: "100%", left: 0, background: '#304352',
      background: '-webkit-linear-gradient(to left, #d7d2cc, #707E89)',
      background: 'linear-gradient(to left, #d7d2cc, #707E89)'
    }} >
      <Container  >
        <Logo style={{ width: '120px', height: '120px' }} />
        <Navbar.Brand style={{ fontSize: "30px", fontFamily: "Georgia", fontWeight: "bolder", color: '#663300' }}>Celebrate Pro</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav style={{ fontFamily: "Georgia", fontWeight: "bolder", color: '#663300' }} className="ms-auto">
            <Nav.Link as={Link} to="/" activeclassname="active-link" style={{ color: '#663300' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/yourevent" activeclassname="active-link" style={{ color: '#663300' }}>My Event</Nav.Link>
            <Nav.Link as={Link} to="/readypackages" activeclassname="active-link" style={{ color: '#663300' }}>Our designs</Nav.Link>
            <Nav.Link as={Link} to="/about" activeclassname="active-link" style={{ color: '#663300' }}>About Us</Nav.Link>
            <Nav.Link id="" style={{ fontFamily: "Georgia" }}>

              {isAuthenticated && user ? (
                <div style={{ position: "relative" }}>
                  <img src={user.picture} alt="User profile" style={{ padding: "0", width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px", cursor: "pointer" }} onClick={handleDropdown} />
                  {showDropdown && (
                    <div style={{ color: '#EEE8AA', position: "absolute", right: 0, top: "60px", backgroundColor: "gray", padding: "20px", borderRadius: "10px", boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.25)", zIndex: "999" }}>
                      <UserProfile user={user} />
                      <span style={{ cursor: "pointer", color: '#EEE8AA' }} onClick={() => logout()} className="auth-link">Logout</span>
                    </div>
                  )}
                </div>
              ) : (
                <span onClick={() => loginWithRedirect()} className="auth-link" style={{ color: '#663300' }}>Login</span>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}

function UserProfile({ user }) {
  return (
    <div>
      <p><strong>{user.name}</strong></p>
      <p>{user.email}</p>
    </div>
  );
}
