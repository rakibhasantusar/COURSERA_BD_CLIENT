import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({ course }) => {
    const { title, id } = course;
    return (
        <div>
            <Link to={`/coursesdetail/${id}`}>
                <p> {title}</p>
            </Link>
        </div>
    );
};

export default LeftSideNav;