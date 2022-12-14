import React from 'react';
import { Button, } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import List from './List';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetail = () => {
    const coursesDetail = useLoaderData()
    const { id, title, details, price, rating, image, list } = coursesDetail
    console.log(coursesDetail,)
    return (
        <div className='container' ref={ref}>
            <section className='container border border-1 shadow-sm mt-5 '>
                <div className='d-flex justify-content-around flex-wrap bg-dark p-3'>
                    <h2 className='text-white '>Welcome to <span className='text-info'>{title}</span> details page</h2>
                    <Pdf targetRef={ref} filename="cooursera-BD-outline.pdf">
                        {({ toPdf }) => <Button variant="primary" onClick={toPdf}>Download PDF</Button>}
                    </Pdf>
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
                        <div className='d-flex justify-content-between flex-wrap w w-50 mx-auto bg-dark p-1'>
                            <h3 className='fw-semibold text-white '> Price: {price}$</h3>
                            <h3 style={{ color: 'goldenrod' }} className='me-4 d-flex align-items-center ms-3' > <span>Ratinng: {rating.rate}<FaStar /></span></h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className=' container '>
                <div className=' w-100 m-auto '>
                    <Link className=' w-100 d-flex  justify-content-center' to={`/checkout/${id}`}>
                        <Button variant="primary" className=' mx-auto mt-5 fs-2'><span className=''>Get Premium access</span> </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CourseDetail;