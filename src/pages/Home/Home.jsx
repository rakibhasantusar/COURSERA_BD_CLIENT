import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import photo from '../../asset/hero_one.jpg'
import photo1 from '../../asset/hero-2.jpg'
import photo2 from '../../asset/hero-3.jpg'

const Home = () => {
    return (
        <div>
            <section className='h-50' >
                <Carousel className='carousel-control-next-icon-none' >
                    <Carousel.Item style={{ height: 800 }}>
                        <img
                            className="d-block w-100 img-fluid"
                            src={photo1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Coursera BD</h3>
                            <p>World most Popular programming learning site</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: 800 }}>
                        <img
                            className="d-block w-100 img-fluid"
                            src={photo}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Coursera BD</h3>
                            <p>Code can change the web world</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: 800 }}>
                        <img
                            className="d-block w-100 img-fluid"
                            src={photo2}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Coursera BD</h3>
                            <p>Practice Practice & Practice </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
        </div>
    );
};

export default Home;