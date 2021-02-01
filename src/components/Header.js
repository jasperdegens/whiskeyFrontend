import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { 
    Link
} from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import './../styles/Header.css';

import { Button } from 'react-bootstrap';
import { tryConnect } from '../utils/tryWeb3Connect';
import { addressTruncate } from '../utils/formatters';

function Header() {
    
    const web3React = useWeb3React();
    const {active, account } = web3React;

    function onClick(){
        if(!active) {
            tryConnect(web3React);
        }
    }

    return (
        <header>
            <div id='title'>
                <h1>Whiskey MarketMaker</h1>
                <h2>Barrel Level Access to Craft Distilleries</h2>
            </div>
            <Navbar sticky="top" expand="md">
                <div className='container'>
                    {/* <Navbar.Brand href="#home">Whiskey MarketMaker</Navbar.Brand> */}
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
                    <Button 
                        onClick={onClick}
                        variant={active ? 'outline-success' : 'outline-primary'}
                        disabled={active ? true : false}
                    >{active ? addressTruncate(account) : 'connect'}</Button>
                </div>
            </Navbar>
        </header>
    )
}


export default Header;