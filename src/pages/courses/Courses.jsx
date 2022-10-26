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
                        <h4>left side</h4>
                        {
                            courses.map(course => (<LeftSideNav key={course.id} course={course}></LeftSideNav>))
                        }
                    </Col>
                    <Col lg='10'>
                        <h2>courses list {courses.length}</h2>
                        <div className="d-flex justify-content-around flex-wrap">
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