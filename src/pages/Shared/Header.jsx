import { React, useContext, } from 'react';
import { Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../Context/AuthProvider';
import img from "../../asset/Coursera-BD.png";

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))

    }

    return (
        <Navbar collapseOnSelect className='mb-4 ' expand="lg" bg="light" variant="light">
            <div className='container d-flex justify-content-between'>
                <Navbar.Brand> <Link className='text-decoration-none  fs-4  border-2 border-bottom border-primary' to='/'> <Image className='mb-2' src={img} style={{ height: '30px', width: '30px' }}></Image>  COURSERA-BD</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-3" >
                        <Link className='text-decoration-none me-3' style={{ color: '#666' }} to='/courses'> Courses </Link>
                        <Link className='text-decoration-none me-3' style={{ color: '#666' }} to='/faq'>Faq</Link>
                        <Link className='text-decoration-none me-3' style={{ color: '#666' }} to='/blog'>Blog</Link>
                    </Nav>
                    <Nav className="">
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant='light' style={{ color: '#666' }} onClick={handleLogOut}>logout</Button>
                                    </>
                                    :
                                    <>
                                        <Link className='text-decoration-none me-3' style={{ color: '#666' }} to='/login'>Login</Link>
                                        <Link className='text-decoration-none' style={{ color: '#666' }} to='/register'>Register</Link>
                                    </>
                            }
                        </>
                        <Link className='ms-2'>
                            {user?.photoURL ?
                                <Image
                                    roundedCircle
                                    src={user?.photoURL}
                                    style={{ height: '40px', width: '40px' }}
                                ></Image>
                                : <FaUser style={{ color: '#666' }}  ></FaUser>
                            }
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar >
    );
};

export default Header;