import { Link } from 'react-router-dom';
import Footer from './Footer';
import FormComp from './Form/FormComp';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Music from './music/Music';
import Flower from './flower/Flower';
import Food from './food/Food';
import Gifts from './gifts/Gifts';
import ReadyPackages from './ReadyPackages/ReadyPackages';
import YourEvent from './yourevent/YourEvent';
import { Nav, Navbar } from 'react-bootstrap';
import './Home.css' ;
import AboutUs from './AboutUs/AboutUs';
import HomeContent from './HomeContent';


function Home() {

    return (<>
        <Header />
        <div>
            <FormComp/>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{ fontFamily: "Georgia" }} className="mr-auto">
                        <Link className="nav-link" to="/music">Music</Link>
                        <Link className="nav-link" to="/flower">Flower</Link>
                        <Link className="nav-link" to="/food">Food</Link>
                        <Link className="nav-link" to="/gift">Gift</Link>
                        <Link className="nav-link" to="/readypackages">Our designs</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <HomeContent/>
            <Routes>

                <Route path='/music' element={<Music />}></Route>
                <Route path='/flower' element={<Flower />}></Route>
                <Route path='/food' element={<Food />}></Route>
                <Route path='/gift' element={<Gifts />}></Route>
                <Route path='/readypackages' element={<ReadyPackages />}></Route>
                <Route path='/yourevent' element={<YourEvent />}></Route>
                <Route path='/aboutus' element={<AboutUs/>}></Route>
            </Routes>
            <Footer />
        </div>
    </>
    )
} export default Home;
