import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselItem() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/800x400?brain"
                    alt="Brain Tumor Detection"
                />
                <Carousel.Caption>
                    <h3>Brain Tumor Detection</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/800x400?alzheimer"
                    alt="Alzheimer's Detection"
                />
                <Carousel.Caption>
                    <h3>Alzheimer's Detection</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselItem;
