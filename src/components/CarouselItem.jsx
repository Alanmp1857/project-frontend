import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import image1 from '../assets/1.jpg';
import image3 from '../assets/3.jpg';

function CarouselItem() {
    return (
        <div style={{ margin: 'auto', width: '100%', height: '100%' }}>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-25 m-2"
                        src={image3}
                        alt="Brain Tumor Detection"
                    />
                    <Carousel.Caption>
                        <h3>Brain Tumor Detection</h3>
                        <Link to="/BrainTumor"><Button>Try Now</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 m-2"
                        src={image1}
                        alt="Alzheimer's Detection"
                    />
                    <Carousel.Caption>
                        <h3>Alzheimer's Detection</h3>
                        <Link to="/Alzheimer"><Button>Try Now</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    );
}

export default CarouselItem;