import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';

import CustomLink from '../CustomLink/CustomLink';
import { SiFoodpanda } from 'react-icons/si';
import './Header.css';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div>

            <Navbar expand="lg" sticky="top 2rem" className='header'>
                <Container>
                    <CustomLink to="/">
                        <Navbar.Brand className='logo'>

                            <SiFoodpanda color='d70f64' size={30} />
                            <span style={{ color: 'd70f64', marginLeft: '5px' }}>MealPanda</span>

                        </Navbar.Brand>
                    </CustomLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle'>

                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav-link">
                            <CustomLink className='link' to='/'>Home</CustomLink>
                            <CustomLink className='link' to='/meals'>Meals</CustomLink>
                            <CustomLink className='link' to='/about'>About</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;