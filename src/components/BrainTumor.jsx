import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';



const BrainTumor = () => {

    const [selectedFile, setSelectedFile] = useState();
    const [isLoading, setIsloading] = useState(false);

    const sendFile = async () => {
        if (image) {
            let formData = new FormData();
            formData.append("file", selectedFile);
            let res = await axios({
                method: "post",
                url: "http://localhost:8000/braintumor/predict",
                data: formData,
            });
            if (res.status === 200) {
                setData(res.data);
            }
            setIsloading(false);
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '53vh' }}>
            <Form>
                <Form.Group className="mb-2 mt-4" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter age" />
                </Form.Group>

                <Link>
                    <Button className='mb-2' variant="primary" type="submit">
                        Submit
                    </Button>
                </Link>
            </Form>
        </div>
    );
};

export default BrainTumor;
