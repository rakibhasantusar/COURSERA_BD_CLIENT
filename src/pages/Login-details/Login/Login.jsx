import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { ButtonGroup } from 'react-bootstrap';

const Login = () => {
    const { signIn, setLoading, providerLogin, gitProviderLogin } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()



    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(res => {
                const user = res.user;
                if (user.uid) {
                    navigate(from, { replace: true })
                } else {
                    toast.error('your email is not verified')
                }
            })
            .catch(err => console.error(err))
            .finally(() => {
                setLoading(false)
            })
    }

    const handleGithubSignIn = () => {
        gitProviderLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                // if (user.uid) {
                //     navigate(from, { replace: true })
                // } else {
                //     toast.error('your id is not verified ')
                // }
            })
            .catch(err => console.error(err))
    }

    const from = location.state?.from?.pathname || '/';


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
        <div className='container'>
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
            <div className='mx-auto w-50 mt-5'>
                <ButtonGroup vertical className='mx-auto w-100'>
                    <Button onClick={handleGoogleSignIn} className='mb-2' variant="primary"><FaGoogle /> Login with Google</Button>
                    <Button onClick={handleGithubSignIn} variant="dark"><FaGithub /> Login with Github</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default Login;