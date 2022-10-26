import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({ course }) => {
    const { title, id } = course;
    return (
        <div>
            <Link className='text-decoration-none' to={`/coursesdetail/${id}`}>
                <p className='mx-3 fs-5 text-danger fw-semibold border border-white border-1 '> {title}</p>
            </Link>
        </div>
    );
};

export default LeftSideNav;