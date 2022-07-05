import React from 'react';
import { Nav, Container, Navbar} from 'react-bootstrap';

import CustomLink from '../CustomLink/CustomLink';
import { SiFoodpanda } from 'react-icons/si';
import './Header.css';



const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className='nav-container px-5 py-2'>
                <Container fluid>
                <CustomLink to="/">
                    <Navbar.Brand className='logo'>

                        <SiFoodpanda color='d70f64' size={30} />
                        <span style={{ color: 'd70f64', marginLeft: '5px' }}>MealPanda</span>

                    </Navbar.Brand>
                    </CustomLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                        </Nav>
                        <Nav className="ms-auto">

                            <Nav>
                                <CustomLink to="/">Home</CustomLink>
                            </Nav>
                            <Nav>
                                <CustomLink to="/meals">Meals</CustomLink>
                            </Nav>
                            <Nav>
                                <CustomLink to="/about">About</CustomLink>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           


            <div>

            </div>



        </div>
    );
};

export default Header;