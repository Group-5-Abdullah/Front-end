
import './HomePage.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function SideBarComp (){
    return (
        <div className="myHome">
        <Navbar bg="light" expand="sm" fixed="bottom"   >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav  style={{ fontFamily: "Georgia",marginTop:"5%" }}  className="flex-column" >

                    <Link className="nav-link" to="/music">Music</Link>
                    <Link className="nav-link" to="/flower">Flower</Link>
                    <Link className="nav-link" to="/food">Food</Link>
                    <Link className="nav-link" to="/gift">Gift</Link>
                    <Link className="nav-link" to="/readypackages">Our designs</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}