
// import React from "react";
// import { Link } from "react-router-dom";
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import './Header.css'; 
// import { useAuth0 } from "@auth0/auth0-react";

// export default function Header() {
//   const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

//   return (
//     <Navbar bg="bisque" expand="lg">
//       <Container>
//         <Navbar.Brand style={{ fontSize: "45px", fontFamily: "Georgia" , fontweight: "bolder" }}>Celebrate Pro</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-nav" />
//         <Navbar.Collapse id="navbar-nav">
//           <Nav style={{ fontFamily: "Georgia" , fontweight: "bolder" , color: "rgb(0, 0, 0);" }} className="ms-auto">
//             <Nav.Link as={Link} to="/home" activeClassName="active-link">Home</Nav.Link>
//             <Nav.Link as={Link} to="/yourevent" activeClassName="active-link">My Event</Nav.Link>
//             <Nav.Link as={Link} to="/readypackages" activeClassName="active-link">Our designs</Nav.Link>
//             <Nav.Link as={Link} to="/aboutus" activeClassName="active-link">About Us</Nav.Link>
//             <Nav.Link  style={{ fontFamily: "Georgia" }} >
//               {isAuthenticated ? (
//                 <span onClick={() => logout()} className="auth-link">Logout</span>
//               ) : (
//                 <span onClick={() => loginWithRedirect()} className="auth-link">Login</span>
//               )}
//             </Nav.Link>


//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);
  if(isAuthenticated){
    localStorage.setItem('user_email',user.email);
}
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  return (
    <Navbar bg="bisque" expand="lg">
      <Container>
        <Navbar.Brand style={{ fontSize: "45px", fontFamily: "Georgia", fontWeight: "bolder" }}>Celebrate Pro</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav style={{ fontFamily: "Georgia", fontWeight: "bolder", color: "rgb(0 0 0)" }} className="ms-auto">
            <Nav.Link as={Link} to="/home" activeclassname="active-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/yourevent" activeclassname="active-link">My Event</Nav.Link>
            <Nav.Link as={Link} to="/readypackages" activeclassname="active-link">Our designs</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" activeclassname="active-link">About Us</Nav.Link>
            <Nav.Link id="" style={{ fontFamily: "Georgia" }}>
              
              {isAuthenticated && user ? (
                <div style={{ position: "relative" }}>
                  <img src={user.picture} alt="User profile" style={{ padding: "0", width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px", cursor: "pointer" }} onClick={handleDropdown} />
                  {showDropdown && (
                    <div style={{ position: "absolute", right: 0, top: "60px", backgroundColor: "gray", padding: "20px", borderRadius: "10px", boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.25)", zIndex: "999" }}>
                      <UserProfile user={user} />
                      <span style={{ cursor: "pointer" }} onClick={() => logout()} className="auth-link">Logout</span>
                    </div>
                  )}
                </div>
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

function UserProfile({ user }) {
  return (
    <div>
      <p><strong>{user.name}</strong></p>
      <p>{user.email}</p>
    </div>
  );
}
