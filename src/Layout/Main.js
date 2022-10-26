import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Header from '../pages/Shared/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className='min-vh-100' >
                <Outlet></Outlet>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;