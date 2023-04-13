import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
// import { useAuth0 } from '@auth0/auth0-react'

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently } = useAuth0()

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(`Name: ${name} Email: ${email} Password: ${password} Confirm Password: ${confirmPassword}`);
        // loginWithPopup()
    };

    return (
        <div className="d-flex justify-content-center">
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mt-2' controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className='mt-2' controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    <Form.Text className="text-muted mb-2">
                        (We'll never share your email with anyone else.)
                    </Form.Text>
                </Form.Group>

                <Form.Group className='mt-2' controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className='mt-2' controlId="formBasicPassword1">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className='mt-2 mb-2'>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;
