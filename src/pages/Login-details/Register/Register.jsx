import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';



const Register = () => {
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)
    const { createUser, upDateUserProfile, verifyEmail } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(res => {
                const user = res.user
                console.log(user)
                toast.success('your registration with login done')
                setError('')
                form.reset()
                handleUpdateUserProfile(name, photourl)
                handleEmailVerification();
                toast.success('verifyEmail send')
            })
            .catch(err => {
                console.log(err)
                setError(err.message)
            })
    }

    const handleUpdateUserProfile = (name, photourl) => {
        const profile = {
            displayName: name,
            photoURL: photourl,
        }
        upDateUserProfile(profile)
            .then(() => { })
            .catch(err => { console.log(err) });
    }

    const handleAccepted = e => {
        setAccepted(e.target.checked)
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='container my-5'>
            <section className="mb-5">
                <div className="card text-center py-5 bg-dark">
                    <div className="card-body ">
                        <h1 className="card-title text-info fs-1"> Welcome to Register page</h1>
                    </div>
                </div>
            </section>
            <Form className='w-75 p-5 m-auto border border-1 shadow-sm' style={{ backgroundColor: '#f8f9fa' }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">Your Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter your name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bold"> Your Photo Url</Form.Label>
                    <Form.Control type="text" name='photourl' placeholder="Your Photo Url" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Enter Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check

                        type="checkbox"
                        onClick={handleAccepted}
                        label={<>Accept <Link className='text-decoration-none'>Agree & Continue</Link> </>}

                    />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted} >
                    Register
                </Button>
                <Form.Text className="text-danger">
                    <p>{error}</p>
                </Form.Text>

                <div className='container m-auto w-100 mt-3 text-decoration-none'>
                    <p className='fw-bold'> Already have an Account? <Link className='text-decoration-none' to='/login'> Login Here</Link></p>
                </div>
            </Form>
        </div>
    );
};

export default Register;