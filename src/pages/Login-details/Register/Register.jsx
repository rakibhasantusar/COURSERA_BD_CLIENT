import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';



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
                setError('')
                form.reset()
                handleUpdateUserProfile(name, photourl)
                // handleEmailVerification();
                // toast.success('verifyEmail send')
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

    // const handleEmailVerification = () => {
    //     verifyEmail()
    //         .then(() => { })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    return (
        <Form className='w-50 m-auto' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter your name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control type="text" name='photourl' placeholder="Your Photo Url" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleAccepted}
                    label={<>Accept <Link to="/terms">Terms and condition</Link> </>}

                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted} >
                Register
            </Button>
            <Form.Text className="text-danger">
                <p>{error}</p>
            </Form.Text>
        </Form>
    );
};

export default Register;