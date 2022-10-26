import React from 'react';

const List = ({ lists }) => {
    return (
        <div>
            <li className='fw-semibold' >{lists}</li>
        </div>
    );
};

export default List;