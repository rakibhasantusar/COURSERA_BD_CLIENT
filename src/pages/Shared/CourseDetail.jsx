import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import List from './List';

const CourseDetail = () => {
    const coursesDetail = useLoaderData()
    const { id, description, title, details, price, rating, image, list } = coursesDetail
    console.log(coursesDetail,)
    return (
        <div>
            <section className='container border border-1 shadow-sm mt-5 '>
                <div className='d-flex justify-content-around bg-dark p-3'>
                    <h2 className='text-white'>Welcome to <span className='text-danger'>{title}</span> details page</h2>
                    <Button variant="primary">Download Course Summary</Button>
                </div>
                <div id="carouselExampleSlidesOnly" className="carousel slide " >
                    <div className="carousel-inner" >
                        <div className="carousel-item active mt-5" >
                            <img src={image} className="d-block w-75 mx-auto img-fluid" alt="..." style={{ maxHeight: '32rem' }} />
                        </div>
                    </div>
                    <div className='mt-5 mx-3'>
                        <h3>{title}<span> description</span></h3>
                        <p className='text-gray'>{details}</p>
                    </div>
                    <div className='mt-5 mx-3'>
                        <h3>{title}<span> benefit</span></h3>
                        {
                            list.map((lists, idx) => <List
                                key={idx}
                                lists={lists}

                            ></List>)
                        }
                    </div>
                    <div className='bg-dark mt-5'>
                        <div className='d-flex justify-content-between w-50 mx-auto bg-dark p-1'>
                            <h3 className='fw-semibold text-white'> Price: {price}$</h3>
                            <h3 style={{ color: 'goldenrod' }} className='me-4 d-flex align-items-center' > Ratinng: {rating.rate}<FaStar /></h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className=' container'>
                <div className=' w-25 m-auto'>
                    <Link to={`/checkout/${id}`}>
                        <Button variant="primary" className='mt-5 fs-2'>Get Premium access</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CourseDetail;