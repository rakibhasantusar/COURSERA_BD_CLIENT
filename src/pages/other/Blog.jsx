import React from 'react';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <div>
            <main className="container mt-5">
                <section className="mb-5">
                    <div className="card text-center py-5 bg-dark">
                        <div className="card-body ">
                            <h1 className="card-title text-info fs-1"> ***** Blog Page *****</h1>
                        </div>
                    </div>
                </section>
                <section>
                    {/* Question-1 */}
                    <Card className='my-4'>
                        <Card.Header className='fs-3'>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    posuere erat a ante.
                                </p>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    {/* Question-1 */}
                    <Card className='my-4'>
                        <Card.Header className='fs-3'>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    posuere erat a ante.
                                </p>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    {/* Question-1 */}
                    <Card className='my-4'>
                        <Card.Header className='fs-3'>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    posuere erat a ante.
                                </p>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    {/* Question-1 */}
                    <Card className='my-4'>
                        <Card.Header className='fs-3'>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    posuere erat a ante.
                                </p>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </section>
            </main>
        </div>
    );
};

export default Blog;