import React from 'react'
import {Navbar, Nav, NavDropdown,Form,FormControl,Button} from 'react-bootstrap'

class NavBarHeader extends React.Component {
    render() {
        return <Navbar fixed="top" bg="light" expand="lg">
            <Navbar.Brand>Art-Space</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav"> 
                <Nav className="mr-auto">
                    <Nav.Link href="#link">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    }
}

export default NavBarHeader