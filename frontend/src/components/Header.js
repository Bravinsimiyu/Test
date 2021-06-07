import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './header.css'


const Header = () => {
    
    
    return (
        <header>
            <Navbar id='navbar' bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
            <LinkContainer to='/'>
            <Navbar.Brand>sports</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <LinkContainer to="/today">
            <Nav.Link><i className='fas fa-shopping-cart'></i>Today</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
            <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
            <Nav.Link><i className='fas fa-user'></i>Sign up</Nav.Link>
            </LinkContainer>                                         
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header

