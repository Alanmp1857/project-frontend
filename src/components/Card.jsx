import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import { Link } from 'react-router-dom';

function CardItem({ title, id, text, url }) {
    // const imgUrl = 'https://cms.kavlifoundation.org/uploads/images/news-pics/neuronalnetwork-02.png';
    // const imgUrl = 'https://www.nec.com/en/global/insights/article/2020022514/images/og_image.jpg';
    // const imgUrl = 'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_1_288x288/public/teaser_image/blog_entry/2023-01/pic20202.jpg?itok=voXEaicK';
    return (
        <Card style={{ width: '20rem' }}>
            {/* <Card.Img variant="top" src={image2} /> */}
            <Card.Img variant="top" style={{ marginTop: '10px', borderRadius: '10px', height: '250px' }} src={url} />
            <Card.Body style={{ display: 'flex', flexDirection: 'column' }} className='text-center'>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Link to={id}><Button variant="primary">Try Now</Button></Link>
            </Card.Body>
        </Card>
    );
}

export default CardItem;
