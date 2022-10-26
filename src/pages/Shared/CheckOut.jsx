import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import photo from "../../asset/checkout.gif";
import { AuthContext } from '../../Context/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const checkOut = useLoaderData()
    const { title, image } = checkOut
    return (
        <div style={{ marginTop: "50px" }}>
            <div className='d-flex justify-content-around bg-dark p-3 container'>
                <h1 className='text-white' style={{ padding: "50px" }}>Thank you for buying <span className='text-warning'>{title}</span></h1>
            </div>

            <div className='container position-relative mt-5'>
                <img className='position-absolute img-fluid w-25' src={photo} alt="" style={{ zIndex: 1, top: -60, left: "20%" }} />
                <img src={image} className="d-block w-75 mx-auto img-fluid mt-5 " alt="..." style={{ maxHeight: '32rem', }} />
            </div>
            <div className='container mt-5 border rounded shadow p-3 '>
                <h2>Dear <span className='text-success'>{user?.displayName}</span></h2>
                <h2>By this email: <span className='text-primary'>{user?.email}</span></h2>
                <h2>Lets start: <span className='text-danger'>{title} </span>and stay connect</h2>
            </div>
        </div>
    );
};

export default CheckOut;