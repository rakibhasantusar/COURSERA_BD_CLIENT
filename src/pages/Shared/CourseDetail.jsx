import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const coursesDetail = useLoaderData()
    const { description, title } = coursesDetail
    console.log(coursesDetail,)
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default CourseDetail;