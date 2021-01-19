import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { 
    Link
} from 'react-router-dom';

import './../styles/Header.css';

function Header() {
    
    return (
        <header>
            <h1>Whiskey Invest</h1>
            <Navbar sticky="top" variant="dark">
                <Navbar.Brand href="#home">Whiskey Invest</Navbar.Brand>
                <Nav className="mr-auto" as='ul'>
                    <Nav.Item as='li'><Link to='/barrels'>Barrels</Link></Nav.Item>
                    <Nav.Item as='li'><Link to='/dashboard'>Dashboard</Link></Nav.Item>
                    <Nav.Item as='li'><Link to='/about'>About</Link></Nav.Item>
                </Nav>
            </Navbar>
        </header>
    )
}


export default Header;