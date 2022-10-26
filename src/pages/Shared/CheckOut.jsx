import React from 'react';
import { useLoaderData } from 'react-router-dom';
import photo from "../../asset/checkout.gif";

const CheckOut = () => {
    const checkOut = useLoaderData()
    const { title, image } = checkOut
    return (
        <div style={{ marginTop: "50px" }}>
            <div className='d-flex justify-content-around bg-dark p-3 container'>
                <h1 className='text-white' style={{ padding: "50px" }}>Thank you for buying <span className='text-warning'>{title}</span></h1>
            </div>
            <div className='container position-relative'>
                <img className='position-absolute img-fluid' src={photo} alt="" style={{ zIndex: 1, }} />
                <img src={image} className="d-block w-75 mx-auto img-fluid mt-5 " alt="..." style={{ maxHeight: '32rem', }} />
            </div>
        </div>
    );
};

export default CheckOut;