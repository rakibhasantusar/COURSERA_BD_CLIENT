import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate, Link } from 'react-router-dom';
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
                if (user.uid) {
                    navigate(from, { replace: true })
                } else {
                    toast.error('your id is not verified ')
                }
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
                if (user.uid) {
                    navigate(from, { replace: true })
                } else {
                    toast.error('your email is not verifyEmail')
                }
            })
            .catch(err => {
                console.error(err)
                //dual error message showed
                setError(err.message)
                toast.error(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <div className='container my-5'>
            <section className="mb-5">
                <div className="card text-center py-5 bg-dark">
                    <div className="card-body ">
                        <h1 className="card-title text-info fs-1"> Welcome to Login page</h1>
                    </div>
                </div>
            </section>
            <Form className='w-75 p-5 m-auto border border-1 shadow-sm ' style={{ backgroundColor: '#f8f9fa' }} onSubmit={handleSignIn} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold' >Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Enter Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-danger">
                    <span className='ms-2 fw-semibold'>{error}</span>
                </Form.Text>
                <div className='container m-auto w-100 mt-3 text-decoration-none'>
                    <p className='fw-bold'>New Here ? Create a New Account. <Link className='text-decoration-none' to='/register'> Register Here</Link>   </p>
                </div>
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