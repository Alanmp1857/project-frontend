import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/js/bootstrap.min.js';
// import BrainTumor from './BrainTumor'

function NavBar() {
    return (
        <Navbar bg="dark" expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Brand className="text-white" href="#">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Nav className="navbar-nav me-auto my-2 my-lg-0">
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Nav.Link className="text-white" href="/BrainTumor">Brain Tumor Detection</Nav.Link>
                                <Nav.Link className="text-white" href="/Alzheimer">Alzheimer Detection</Nav.Link>
                            </div>
                            <div style={{ marginLeft: '650px' }}>
                                <Button style={{ marginRight: '5px' }} variant="outline-primary"><a href="/SignIn">SignIn</a></Button>
                                <Button variant="outline-primary">SignUp</Button>
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
