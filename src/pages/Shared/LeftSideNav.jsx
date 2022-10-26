import React from 'react';

const LeftSideNav = ({ course }) => {
    const { title } = course;
    return (
        <div>
            <p> {title}</p>
        </div>
    );
};

export default LeftSideNav;