import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Footer from './Footer';
import image5 from '../assets/5.webp';
import image7 from '../assets/7.jpg';

const Alzheimer = () => {
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
            const response = await axios.post('http://localhost:8001/alzheimer/predict', formDataObj);
            const { class: resultClass, confidence, image } = response.data;
            const imageUrl = `data:image/jpg;base64,${image}`;
            console.log(imageUrl, formData.file)
            const newWindow = window.open('', '_blank', 'width=600,height=600');
            newWindow.document.write(`
                <style>
                body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                font-family: 'Inconsolata', monospace;
                }
                
                .report-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                padding: 20px;
                border: 2px solid black;
                border-radius: 10px;
                max-width: 600px;
                }
                
                .report - card h1 {
                    margin-bottom: 20px;
                }
                
                .report-card table {
                margin-bottom: 20px;
                }
                
                .report - card img {
                max-width: 200px;
                max-height: 200px;
                }

                .dark{
                font-weight: bold;
                }
                </style>

        <div class="report-card">
        <h1>Medical Report Card</h1>

        ${confidence >= 0.9 ? `
                <table>
                    <tr>
                    <td class="dark">Name:</td>
                    <td>${formData.firstName} ${formData.lastName}</td>
                    </tr>
                    <tr>
                    <td class="dark">Age:</td>
                    <td>${formData.age}</td>
                    </tr>
                    <tr>
                    <td class="dark">Tumor Present:</td>
                    <td>${(resultClass === 'Non_Demented') ? 'No' : 'Yes'}</td>
                    </tr>
                    <tr>
                    <td class="dark">Class:</td>
                    <td>${resultClass}</td>
                    </tr>
                    <tr>
                    <td class="dark">Confidence:</td>
                    <td>${(confidence * 100).toFixed(2)}%</td>
                    </tr>
                </table>
                <div>
                    <p class="dark">Selected file preview:</p>
                    <img src="${URL.createObjectURL(formData.file)}" alt="Selected file preview" />
                </div>` : `<p>Try again or input appropriate image</p>`}

            </div>
            `);
            newWindow.document.close();
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmitAndPrint = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const formDataObj = new FormData();
            formDataObj.append('file', formData.file);
            formDataObj.append('firstName', formData.firstName);
            formDataObj.append('lastName', formData.lastName);
            formDataObj.append('age', formData.age);

            const response = await axios.post('http://localhost:8001/alzheimer/predict', formDataObj);

            const { class: resultClass, confidence, image } = response.data;
            const imageUrl = `data: image / jpg; base64, ${image} `;

            const newWindow = window.open('', '_blank', 'width=600,height=600');
            newWindow.document.write(`
                <style>
                body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                font-family: 'Inconsolata', monospace;
            }
                
                .report-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                padding: 20px;
                border: 2px solid black;
                border-radius: 10px;
                max-width: 600px;
            }
                
                .report-card h1 {
                margin-bottom: 20px;
            }
                
                .report-card table {
                margin-bottom: 20px;
            }
                
                .report-card img {
                max-width: 200px;
                max-height: 200px;
            }

                .dark{
                font-weight: bold;
            }
            </style>

        <div class="report-card">
        <h1>Medical Report Card</h1>

        ${confidence >= 0.9 ? `
                <table>
                    <tr>
                    <td class="dark">Name:</td>
                    <td>${formData.firstName} ${formData.lastName}</td>
                    </tr>
                    <tr>
                    <td class="dark">Age:</td>
                    <td>${formData.age}</td>
                    </tr>
                    <tr>
                    <td class="dark">Tumor Present:</td>
                    <td>${(resultClass === 'Non_Demented') ? 'No' : 'Yes'}</td>
                    </tr>
                    <tr>
                    <td class="dark">Class:</td>
                    <td>${resultClass}</td>
                    </tr>
                    <tr>
                    <td class="dark">Confidence:</td>
                    <td>${(confidence * 100).toFixed(2)}%</td>
                    </tr>
                </table>
                <div>
                    <p class="dark">Selected file preview:</p>
                    <img src="${URL.createObjectURL(formData.file)}" alt="Selected file preview" />
                </div>` : `<p>Try again or input appropriate image</p>`}

            </div>

            `);
            newWindow.onload = () => {
                setTimeout(() => {
                    newWindow.print();
                    newWindow.close();
                }, 1000); // delay the print operation by 1 second
            };

            newWindow.document.close();
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'
            }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-2 " controlId="formFirstName">
                        <Form.Label style={{ color: "white" }}>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formLastName">
                        <Form.Label style={{ color: "white" }}>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formImage">
                        <Form.Label style={{ color: "white" }}>Image</Form.Label>
                        <Form.Control type="file" onChange={handleFileChange} />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formAge">
                        <Form.Label style={{ color: "white" }}>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter age" name="age" value={formData.age} onChange={handleInputChange} />
                    </Form.Group>

                    <Button className='m-2' variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>

                    <Button className='m-2' variant="primary" type="submit" onClick={handleSubmitAndPrint}>
                        Submit and Print
                    </Button>
                </Form>
            </div>
            {/* <div>
                <Footer />
            </div> */}
        </>
    );
};

export default Alzheimer;