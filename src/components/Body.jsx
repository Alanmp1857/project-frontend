import React from 'react'
import CardItem from './Card'
// import CardItem from './components/Card'
import Row from 'react-bootstrap/Row';
import image6 from '../assets/6.png';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';

function Body() {
    // const imgUrl = image;
    return (
        <div style={{ height: 'auto', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <Row xs={1} md={2} className="g-4 p-3" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <CardItem title="Brain Tumor Detection" id="/BrainTumor" text="Early detection and diagnosis of brain tumors can significantly improve the chances of successful treatment and improved patient outcomes." url={image1} />

                <CardItem title="Alzheimer's Detection" id="/Alzheimer" text="Early detection and diagnosis of Alzheimer's disease can help patients and families plan for the future and access available treatments that may improve quality of life." url={image2} />
            </Row>
        </div>
    )
}

export default Body