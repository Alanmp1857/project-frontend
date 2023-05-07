import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({ loginWithPopup, logout, isAuthenticated, user }) {
    const [refresh, setRefresh] = useState(0)
    // const name = user?.name
    const [name, setName] = useState(localStorage.getItem('name'));
    const [image, setImage] = useState();
    const { getAccessTokenSilently } = useAuth0();

    // console.log(image);
    useEffect(() => {
        console.log(user)
        setImage(user?.picture)
    }, [user])

    async function handleSignIn() {
        await loginWithPopup();
        const token = await getAccessTokenSilently()
        // console.log(token)

        const resp = await axios.get('http://localhost:3000/signin', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(resp.data);
        setName(resp.data.data.username)
        localStorage.setItem('name', resp.data.data.username)
        // setImage(resp.data.data.image)
        setRefresh(prev => prev + 1);
    }

    // console.log(name)

    return (
        <Navbar bg="dark" expand="lg" sticky="top" style={{ opacity: '0.8', backgroundColor: 'black' }}>
            <Container fluid>
                <Link style={{ textDecoration: "none" }} to="/">
                    <Navbar.Brand className="text-white">NeuraLink</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="text-white">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className="text-white" href="/BrainTumor">Brain Tumor Detection</Nav.Link>
                        <Nav.Link className="text-white" href="/Alzheimer">Alzheimer Detection</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <div className='text-white m-1'>
                            <img src={image} alt="" style={{ height: '30px', width: 'auto', borderRadius: '100%', marginRight: '8px' }} />
                            {name}
                        </div>
                        {isAuthenticated ?
                            (<Button variant="outline-success" className="mb-3 mb-lg-0 me-lg-3" onClick={() => { logout(); localStorage.clear() }}>Logout</Button>)
                            :
                            (<Button variant="outline-success" className="mb-3 mb-lg-0 me-lg-3" onClick={handleSignIn}>Sign In | Sign Up</Button>)
                        }
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
