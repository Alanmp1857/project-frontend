import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import FileBase64 from 'react-file-base64'
import { useAuth0 } from '@auth0/auth0-react'

const BrainTumor = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        file: null,
    });

    const [base64Image, setBase64Image] = useState(null);

    useEffect(() => {
        const handleFileChange = async (image) => {
            // const formdata = new FormData();
            // formdata.append('file', event.target.files[0]);
            // setFormData({ ...formData, file: event.target.files[0] });
            // const response = await axios.post(`http://localhost:3000/uploadImage`, formdata, {
            //     headers: {
            //         'Content-Type': 'multipart/form-data',
            //         'file': formData
            //     }
            // })
            // console.log(response, event.target.files[0], formData)
            console.log(image);
            const token = await getAccessTokenSilently();
            const resp = await axios.post(`http://localhost:3000/user/`, { username: user.nickname, image: image }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(resp.data)
        };
        if (base64Image != null) handleFileChange(base64Image);
        console.log(base64Image)
    }, [base64Image])


    const { user, getAccessTokenSilently } = useAuth0()

    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFile = async (event) => {
        const formdata = new FormData();
        formdata.append('file', event.target.files[0]);
        setFormData({ ...formData, file: event.target.files[0] });
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setBase64Image(reader.result);
        };
        console.log(event.target.files[0], formData)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const formDataObj = new FormData();
            formDataObj.append('file', formData.file);
            formDataObj.append('firstName', formData.firstName);
            formDataObj.append('lastName', formData.lastName);
            formDataObj.append('age', formData.age);
            const token = await getAccessTokenSilently();
            const resp = await axios.post('http://localhost:3000/user', { username: user.nickname, firstname: formData.firstName, lastname: formData.lastName, age: formData.age }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(resp.data);
            const response = await axios.post('http://localhost:8000/braintumor/predict', formDataObj);

            const { class: resultClass, confidence, image } = response.data;
            const imageUrl = `data:image/jpg;base64,${image}`;

            const newWindow = window.open('', '_blank', 'width=600,height=600');
            newWindow.document.write(`
            <h1>Result</h1>
            <p>Name: ${formData.firstName} ${formData.lastName}</p>
            <p>Age: ${formData.age}</p>
            <p>Tumor Present: ${(resultClass === 'no_tumor') ? 'No' : 'Yes'}</p>
            <p>Class: ${resultClass}</p>
            <p>Confidence: ${(confidence * 100).toFixed(2)}%</p>
            <img
                src="${URL.createObjectURL(formData.file)}"
                alt="Selected file preview"
            />
          `);
            // newWindow.print();
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

            const response = await axios.post('http://localhost:8000/braintumor/predict', formDataObj);

            const { class: resultClass, confidence, image } = response.data;
            const imageUrl = `data:image/jpg;base64,${image}`;

            const newWindow = window.open('', '_blank', 'width=600,height=600');
            newWindow.document.write(`
            <h1>Result</h1>
            <p>Name: ${formData.firstName} ${formData.lastName}</p>
            <p>Age: ${formData.age}</p>
            <p>Tumor Present: ${(resultClass === 'no_tumor') ? 'No' : 'Yes'}</p>
            <p>Class: ${resultClass}</p>
            <p>Confidence: ${(confidence * 100).toFixed(2)}%</p>
            <img
                src="${URL.createObjectURL(formData.file)}"
                alt="Selected file preview"
            />
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
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh',
            backgroundImage: 'url("https://wallpaperaccess.com/full/1871472.jpg")'
            , backgroundSize: 'cover',
            backgroundPosition: 'center',
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
                    {/* <FileBase64 type='file' value={formData.file} multiple={false} onDone={(base64) => handleFileChange({ image: base64 })} /> */}
                    <Form.Control type="file" onChange={handleFile} />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formAge">
                    <Form.Label style={{ color: "white" }}>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter age" name="age" value={formData.age} onChange={handleInputChange} />
                </Form.Group>

                <Button className='m-2' variant="primary" type="submit">
                    Submit
                </Button>

                <Button className='m-2' variant="primary" type="submit" onClick={handleSubmitAndPrint}>
                    Submit and Print
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