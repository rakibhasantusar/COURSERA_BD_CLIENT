import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Course = ({ course }) => {
    const { image, title, description, price } = course
    return (
        <div className='my-3'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className='img-fluid' src={image} style={{ height: '10rem' }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <p>price:{price}$</p>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;