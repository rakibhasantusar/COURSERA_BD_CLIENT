import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, image, title, description, price, rating } = course
    return (
        <div className='my-3'>
            <Card style={{ width: '18rem', height: '25rem' }}>
                <Card.Img variant="top" className='img-fluid' src={image} style={{ height: '10rem' }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <span className=''>{description.slice(0, 70)}...</span>
                    </Card.Text>
                    <Card.Text className='position-absolute fixed-bottom ms-3' style={{ marginBottom: '60px' }}>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-semibold'> Price: {price}$</p>
                            <p style={{ color: 'goldenrod' }} className='me-4 d-flex align-items-center' > Ratinng: {rating.rate}<FaStar /></p>
                        </div>
                    </Card.Text>
                    <Link to={`/coursesdetail/${id}`}>
                        <Button variant="dark" className='position-absolute bottom-0 mb-4'>Course detail</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;