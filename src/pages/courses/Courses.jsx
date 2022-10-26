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
            <Container>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <div className='d-flex justify-content-around bg-dark p-3 pt-4 mt-2'>
                            <h4 className='text-white'>Course <span className='text-danger'>{courses.length}</span> list</h4>
                        </div>
                        <div className='bg-dark vh-100 '>
                            {
                                courses.map(course => (<LeftSideNav key={course.id} course={course}></LeftSideNav>))
                            }
                        </div>
                    </Col>
                    <Col lg='10'>
                        <div className='d-flex justify-content-around bg-dark p-3 mt-2'>
                            <h2 className='text-white'>Total <span className='text-danger'>{courses.length}</span> Courses Here</h2>
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