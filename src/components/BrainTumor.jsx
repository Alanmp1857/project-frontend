import React from 'react';
import { Form, Button } from 'react-bootstrap';

const BrainTumor = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '53vh' }}>
            <Form>
                <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter age" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default BrainTumor;
