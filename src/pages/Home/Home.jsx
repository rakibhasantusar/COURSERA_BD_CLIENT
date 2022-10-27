import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import photo from '../../asset/hero_one.jpg'
import photo1 from '../../asset/hero-2.jpg'
import photo2 from '../../asset/hero-3.jpg'
import { Accordion, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
    return (
        <div>
            <section className='h-50' >
                <Carousel className='carousel-control-next-icon-none' >
                    <Carousel.Item style={{ maxHeight: 800 }}>
                        <img
                            className="d-block w-100 img-fluid"
                            src={photo1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Coursera BD</h3>
                            <p>World most Popular programming learning site</p>
                            <Link to='/courses'>
                                <Button variant='light' className=' my-3 p-2 text-primary fw-semibold  ' > Courses Here <span ><small ><FaArrowRight className='mb-1' /></small></span> </Button>
                            </Link>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ maxHeight: 800 }}>
                        <img
                            className="d-block w-100 img-fluid"
                            src={photo}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Coursera BD</h3>
                            <p>Code can change the web world</p>
                            <Link to='/courses'>
                                <Button variant='light' className=' my-3 p-2 text-primary fw-semibold  ' > Courses Here <span ><small ><FaArrowRight className='mb-1' /></small></span> </Button>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ maxHeight: 800 }}>
                        <img
                            className="d-block w-100 img-fluid"
                            src={photo2}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Coursera BD</h3>
                            <p>Practice Practice & Practice </p>
                            <Link to='/courses'>
                                <Button variant='light' className=' my-3 p-2 text-primary fw-semibold  ' > Courses Here <span ><small ><FaArrowRight className='mb-1' /></small></span> </Button>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>

            <section className="mb-5">
                <div className="card text-center py-2 ">
                    <div className="card-body ">
                        <h1 className="card-title text-dark fs-4">Common Interview Questions for Programmers</h1>
                    </div>
                </div>
            </section>
            <section>
                <Accordion defaultActiveKey="0" className='container'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>1. What programming languages can you work with? Describe your experience with them.</Accordion.Header>
                        <Accordion.Body>
                            This question emphasizes technical skills without making interviewees demonstrate what they can do outright. So instead of writing a line of code in Python, an interviewee can describe an example of a simple game he or she made using a programming language. This shows that the programmer has a sense of the bigger picture of programming.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2. What do you do first when creating something new?</Accordion.Header>
                        <Accordion.Body>
                            Being able to assess, prioritize and plan out a project affects a programmer’s success drastically. The ability to see a whole project from start to finish and to visualize what the in-between stages look like requires a deep understanding of programming. Visualization and practice are essential to success.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>3. How do you keep up with current trends and advances in this field?</Accordion.Header>
                        <Accordion.Body>
                            Because of the rapid evolution of technology, a programmer must also be an eternal student. Participating in continuing education, keeping current on certifications and networking with other programmers who work in similar fields can be very helpful. Employers also look for potential employees who are open to debate, discussion and critique.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>5. What is the ideal work environment?</Accordion.Header>
                        <Accordion.Body>
                            This is one of the more traditional questions for any job in any field. However, it is worth mentioning here because a programmer works best in an environment that is conducive to his or her style of work. If the prospective employee prefers to work alone in the dark, then a company with an open office layout is probably not going to be a good fit.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>

            <section className="mb-5 container ">
                <div className="card text-center py-2 shadow-sm ">
                    <div className="card-body">
                        <Link to='/courses' className='text-decoration-none'>
                            <h1 className="card-title text-dark fs-4 "> <span>So if you Wanna crack your next job then enroll one of the course here</span>


                                <FaArrowRight className=' text-primary ms-2' />


                            </h1>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;