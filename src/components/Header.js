import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { 
    Link
} from 'react-router-dom';

import './../styles/Header.css';

function Header() {
    
    return (
        <header>
            <h1>Whiskey Invest</h1>
            <Navbar sticky="top" expand="md">
                <Navbar.Brand href="#home">Whiskey Invest</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" as='ul'>
                        <Nav.Item as='li'><Link to='/barrels'>Barrels</Link></Nav.Item>
                        <Nav.Item as='li'><Link to='/dashboard'>Dashboard</Link></Nav.Item>
                        <Nav.Item as='li'><Link to='/about'>About</Link></Nav.Item>
                        <Nav.Item as='li'><Link to='/three'>Three</Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}


export default Header;