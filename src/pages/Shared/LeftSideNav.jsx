import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({ course }) => {
    const { title, id } = course;
    return (
        <div>
            <Link className='text-decoration-none' to={`/coursesdetail/${id}`}>
                <p className='mx-2 fs-5 text-info fw-semibold border-start border-3 border-info ' style={{ paddingLeft: 6 }}> {title}</p>
            </Link>
        </div>
    );
};

export default LeftSideNav;