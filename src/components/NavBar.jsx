import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
// import BrainTumor from './BrainTumor'
import { useAuth0 } from '@auth0/auth0-react'

function NavBar({ loginWithPopup, logout }) {
    return (
        <Navbar bg="dark" expand="lg" sticky="top">
            <Container fluid>
                <Link style={{ textDecoration: "none" }} to="/"> <Navbar.Brand className="text-white">NeuraLink</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Nav className="navbar-nav me-auto my-2 my-lg-0">
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Nav.Link className="text-white" href="/BrainTumor">Brain Tumor Detection</Nav.Link>
                                <Nav.Link className="text-white" href="/Alzheimer">Alzheimer Detection</Nav.Link>
                            </div>
                            <div style={{ marginLeft: '890px' }}>
                                <Button style={{ marginRight: '5px' }} variant="outline-primary" onClick={loginWithPopup}>SignIn</Button>
                                <Button style={{ marginRight: '5px' }} variant="outline-primary" onClick={logout}>Logout</Button>
                                {/* <Button variant="outline-primary" onClick={loginWithPopup}>SignUp</Button> */}
                            </div>
                        </Nav>
                    </div>
                    {/* <Form className="d-flex">
                        <Button variant="outline-success" className='mr-4'>SignIn</Button>
                        <Button variant="outline-success">SignUp</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;