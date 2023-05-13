import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import { Link } from 'react-router-dom';

function CardItem({ title, id, text, url }) {
    return (
        <Card style={{ width: '20rem', borderRadius: '10px', opacity: '0.8', backgroundColor: 'black' }}>
            <Card.Img variant="top" style={{ marginTop: '10px', borderRadius: '10px', height: '250px' }} src={url} />
            <Card.Body style={{ display: 'flex', flexDirection: 'column' }} className='text-center'>
                <Card.Title style={{ color: '#cccccc' }}>{title}</Card.Title>
                <Card.Text style={{ color: '#999999' }}>
                    {text}
                </Card.Text>
                <Link to={id}><Button variant="primary">Try Now</Button></Link>
            </Card.Body>
        </Card>
    );
}

export default CardItem;
