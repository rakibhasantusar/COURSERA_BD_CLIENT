import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({ course }) => {
    const { title, id } = course;
    return (
        <div >
            <Link className='text-decoration-none  ' to={`/coursesdetail/${id}`}>
                <p className='mx-2 fs-5 text-white' style={{ paddingLeft: 6 }}><span>{title}</span></p>
            </Link>
        </div>
    );
};

export default LeftSideNav;