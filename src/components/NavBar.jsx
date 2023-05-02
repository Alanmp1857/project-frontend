import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios';

function NavBar({ loginWithPopup, logout, isAuthenticated, user }) {
    const [refresh, setRefresh] = useState(0)
    const name = user?.name
    const { getAccessTokenSilently } = useAuth0();

    async function handleSignIn() {
        await loginWithPopup();
        const token = await getAccessTokenSilently()
        console.log(token)
        const resp = await axios.get('http://localhost:3000/signin', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(resp.data);
        setRefresh(prev => prev + 1);
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" collapseOnSelect>
            <Container fluid>
                <Link style={{ textDecoration: "none" }} to="/">
                    <Navbar.Brand className="text-white">NeuraLink</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="navbar-nav me-auto my-2 my-lg-0">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Nav.Link className="text-white" href="/BrainTumor">Brain Tumor Detection</Nav.Link>
                            <Nav.Link className="text-white" href="/Alzheimer">Alzheimer Detection</Nav.Link>
                            <div className='text-white' style={{ marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {name}
                            </div>
                        </div>
                    </Nav>
                    <div className='text-center'>
                        {isAuthenticated ?
                            (<Button variant="outline-success" className="mb-3 mb-lg-0 me-lg-3" onClick={logout}>Logout</Button>)
                            :
                            (<Button variant="outline-success" className="mb-3 mb-lg-0 me-lg-3" onClick={handleSignIn}>Sign In | Sign Up</Button>)
                        }
                    </div>
                </Navbar.Collapse>
            </Container>

            <style jsx>{`
            @media (max-width: 768px) {
                .navbar-nav {
                  flex-direction: column;
                }
                .navbar > nav > div {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                .nav-link {
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  margin: 10px 0;
                }
              }
              
            `}</style>
        </Navbar>
    );
}

export default NavBar;
