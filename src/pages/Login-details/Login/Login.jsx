import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()


    const from = location.state?.from?.pathname || '/';

    const { signIn, setLoading } = useContext(AuthContext)

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(res => {
                const user = res.user;
                form.reset()
                setError('')
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                } else {
                    toast.error('your email is not verifyEmail')
                }
            })
            .catch(err => {
                console.error(err)
                setError(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <Form className='m-auto w-50' onSubmit={handleSignIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Login;