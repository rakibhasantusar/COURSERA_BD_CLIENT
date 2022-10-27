import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div>
            <main className="container mt-5">
                <section className="mb-5">
                    <div className="card text-center py-5 bg-dark">
                        <div className="card-body ">
                            <h1 className="card-title text-info fs-1">===== Faq Area =====</h1>
                        </div>
                    </div>
                </section>
                <section className="mb-5">
                    <div className="card text-center py-2 ">
                        <div className="card-body ">
                            <h1 className="card-title text-dark fs-4">Common Interview Questions for Programmers</h1>
                        </div>
                    </div>
                </section>
                <section>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>1. What programming languages can you work with? Describe your experience with them.</Accordion.Header>
                            <Accordion.Body>
                                This question emphasizes technical skills without making interviewees demonstrate what they can do outright. So instead of writing a line of code in Python, an interviewee can describe an example of a simple game he or she made using a programming language. This shows that the programmer has a sense of the bigger picture of programming.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>2. What do you do first when creating something new?</Accordion.Header>
                            <Accordion.Body>
                                Being able to assess, prioritize and plan out a project affects a programmer’s success drastically. The ability to see a whole project from start to finish and to visualize what the in-between stages look like requires a deep understanding of programming. Visualization and practice are essential to success.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>3. How do you keep up with current trends and advances in this field?</Accordion.Header>
                            <Accordion.Body>
                                Because of the rapid evolution of technology, a programmer must also be an eternal student. Participating in continuing education, keeping current on certifications and networking with other programmers who work in similar fields can be very helpful. Employers also look for potential employees who are open to debate, discussion and critique.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>5. What is the ideal work environment?</Accordion.Header>
                            <Accordion.Body>
                                This is one of the more traditional questions for any job in any field. However, it is worth mentioning here because a programmer works best in an environment that is conducive to his or her style of work. If the prospective employee prefers to work alone in the dark, then a company with an open office layout is probably not going to be a good fit.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </section>
            </main>
        </div>
    );
};

export default Faq;