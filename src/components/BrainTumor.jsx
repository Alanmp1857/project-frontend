import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const BrainTumor = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        file: null,
    });

    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (event) => {
        setFormData({ ...formData, file: event.target.files[0] });
    };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     setIsLoading(true);
    //     const formDataObj = new FormData();
    //     formDataObj.append('file', formData.file);
    //     formDataObj.append('firstName', formData.firstName);
    //     formDataObj.append('lastName', formData.lastName);
    //     formDataObj.append('age', formData.age);
    //     try {
    //         const response = await axios.post('http://localhost:8000/braintumor/predict', formDataObj);
    //         setResult(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const formDataObj = new FormData();
        formDataObj.append('file', formData.file);
        formDataObj.append('firstName', formData.firstName);
        formDataObj.append('lastName', formData.lastName);
        formDataObj.append('age', formData.age);
        try {
            const response = await axios.post('http://localhost:8000/braintumor/predict', formDataObj);
            const { class: resultClass, confidence, image } = response.data;
            const imageUrl = `data:image/jpg;base64,${image}`;
            console.log(imageUrl, formData.file)
            const newWindow = window.open('', '_blank', 'width=600,height=600');
            newWindow.document.write(`
            <h1>Result</h1>
            <p>Class: ${resultClass}</p>
            <p>Confidence: ${confidence}</p>
            <img
             src="${URL.createObjectURL(formData.file)}"
             alt="Selected file preview"
            />
        `);
            newWindow.document.close();
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    function test() {
        url = "https://www.google.de//images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
        img = '<img src="' + url + '">';
        popup = window.open();
        popup.document.write(img);
        popup.print();
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '53vh' }}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2 mt-4" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" onChange={handleFileChange} />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter age" name="age" value={formData.age} onChange={handleInputChange} />
                </Form.Group>

                <Button className='mb-2' variant="primary" type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Submit'}
                </Button>

                {/* {result && (
                    <div>
                        <p>Class: {result.class}</p>
                        <p>Confidence: {result.confidence}</p>
                    </div>
                )} */}
            </Form>
        </div>
    );
};

export default BrainTumor;
