import React from 'react';
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';
import { Link } from 'react-router-dom';
import logo from "../../asset/Coursera-BD.png";

const Footer = () => {
    return (
        <CDBFooter className="shadow mt-5 border border-secondary" >
            <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
                <CDBBox display="flex" justifyContent="around" className="flex-wrap">
                    <CDBBox alignSelf="center" className=" mb-3 w-25">
                        <Link to="/" className="d-flex align-items-center p-0 mb-3 text-primary text-decoration-none">
                            <img alt="logo" src={logo} width="28px" />
                            <span className="ms-2 h5 fw-bold ">OURSERA-BD</span>
                        </Link>
                        <div >
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum labore quia? Quisquam, optio provident! Quae rerum quis unde, libero tempora aut consequatur in earum placeat, fugiat cumque ad odit.
                            </p>
                        </div>
                        <CDBBox className="mt-5 " display="flex">
                            <CDBBtn flat color="dark" className="p-2">
                                <CDBIcon fab icon="facebook-f" />
                            </CDBBtn>
                            <CDBBtn flat color="dark" className="mx-3 p-2">
                                <CDBIcon fab icon="twitter" />
                            </CDBBtn>
                            <CDBBtn flat color="dark" className="p-2">
                                <CDBIcon fab icon="instagram" />
                            </CDBBtn>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox className=" mb-3 d-none d-lg-block"  >
                        <p className="h5 mb-3" style={{ fontWeight: '600' }}>
                            CourseraBD
                        </p>
                        <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
                            <Link className='text-decoration-none fs-6 mb-2 text-dark' to="/">Home</Link>
                            <Link className='text-decoration-none fs-6 mb-2 text-dark' to="/faq">Faq</Link>
                            <Link className='text-decoration-none fs-6 mb-2 text-dark' to="/blog">Blog</Link>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox className=" mb-3 d-none d-lg-block">
                        <p className="h5 mb-3" style={{ fontWeight: '600' }}>
                            Products
                        </p>
                        <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
                            <Link className='text-decoration-none fs-6 mb-2 text-dark' to="/courses">Courses</Link>
                            <Link className='text-decoration-none fs-6 mb-2 text-dark' to="/coursesdetail/5">JavaScript</Link>
                            <Link className='text-decoration-none fs-6 mb-2 text-dark' to="/coursesdetail/3">React ourses</Link>
                            <Link className='text-decoration-none fs-6 mb-2 text-dark' to="/coursesdetail/6">Python</Link>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox className=" mb-3 d-none d-lg-block">
                        <p className="h5 mb-3" style={{ fontWeight: '600' }}>
                            Help
                        </p>
                        <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
                            <Link className='text-decoration-none fs-6 mb-2 text-dark' to="/faq">Support</Link>
                            <Link className='text-decoration-none fs-6 mb-2 text-dark' to="/register">Sign Up</Link>
                            <Link className='text-decoration-none fs-6 mb-2 text-dark' to="/login">Sign In</Link>
                        </CDBBox>
                    </CDBBox>
                </CDBBox>
                <small className="text-center mt-2">&copy; coursera-bd, 2023. All rights reserved.</small>
            </CDBBox>
        </CDBFooter>
    );
};

export default Footer;