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
                        <Card.Header className='fs-3'>1.what is cors?</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                                </p>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    {/* Question-2 */}
                    <Card className='my-4'>
                        <Card.Header className='fs-3'>2.why are you using firebase ? What other option do you have to implement authentication?</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                                    Authentication is common way to handle security for all applications. This is only way to answer the question “who you are?” to the application, when comes to stateless architecture or service oriented architecture we got lot of new concepts and technologies in the market. In this article we will learn how to handle authentication on RESTful APIs.

                                    Authentication:

                                    Lets start by listing the various ways through which we can achieve authentication,

                                    Cookie-Based authentication
                                    Token-Based authentication
                                    Third party access OAuth, API-token
                                    OpenId
                                    SAML

                                </p>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    {/* Question-3 */}
                    <Card className='my-4'>
                        <Card.Header className='fs-3'>3.What does private route work?</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    This is a quick example of how to implement a private route component with React Router 6. The private route component is used to protect selected pages in a React app from unauthenticated users.

                                    The below code snippets are from a React + Redux JWT authentication tutorial I posted recently that includes a live demo, so to see the code running check out
                                    The App component is the root component of the example app, it contains the outer html, main nav and routes for the application.

                                    The /login route is public, and the home route (/) is protected by the private route component that uses Redux to check if the user is logged in.
                                </p>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    {/* Question-4 */}
                    <Card className='my-4'>
                        <Card.Header className='fs-3'>4.What is Node? How does Node Work? </Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

                                    Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
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