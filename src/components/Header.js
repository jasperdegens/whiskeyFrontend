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
            <div id='title'>
                <h1>WHISKEY GUILD</h1>
                <h2>Barrel Level Access to Craft Distilleries</h2>
            </div>
            <Navbar sticky="top" expand="md">
                <div className='container'>
                    {/* <Navbar.Brand href="#home">Whiskey Invest</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" as='ul'>
                            <Nav.Item as='li'><Link to='/'>Home</Link></Nav.Item>
                            <Nav.Item as='li'><Link to='/barrels'>Barrels</Link></Nav.Item>
                            <Nav.Item as='li'><Link to='/dashboard'>Dashboard</Link></Nav.Item>
                            <Nav.Item as='li'><Link to='/about'>About</Link></Nav.Item>
                            <Nav.Item as='li'><Link to='/three'>Three</Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </header>
    )
}


export default Header;