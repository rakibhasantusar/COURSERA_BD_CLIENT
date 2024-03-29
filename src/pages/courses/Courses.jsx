import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../Shared/Course';
import LeftSideNav from '../Shared/LeftSideNav';

const Courses = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div>
            <Container className='mt-5'>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <div className='d-flex justify-content-around bg-secondary p-3 pt-4 mt-2 border-2 border-bottom border-light'>
                            <h4 className='text-white '>Course <span className='text-white'>{courses.length}</span> list</h4>
                        </div>
                        <div className='bg-secondary pb-4 pt-3  '>
                            {
                                courses.map(course => (<LeftSideNav key={course.id} course={course}></LeftSideNav>))
                            }
                        </div>
                    </Col>
                    <Col lg='10'>
                        <div className='d-flex justify-content-around bg-dark p-3 mt-2'>
                            <h2 className='text-white'>Total <span className='text-info'>{courses.length}</span> Courses Here</h2>
                        </div>
                        <div className="d-flex justify-content-around flex-wrap mt-3">
                            {
                                courses.map(course => (<Course key={course.id} course={course} ></Course>))
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;