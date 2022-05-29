import React, { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import './Navigation.css';
export default class Navigation extends Component {
    render() {
        return (
            <React.Fragment>
            <Navbar  expand="lg">
            <Navbar.Brand className="app-logo">
                <div></div><span className='camphire-main-logo-text'>Camphire Artistry</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            
            <Nav.Link href="/home" className="menu-item">Home</Nav.Link>
            {/* <Nav.Link href="/services" className="menu-item">Services</Nav.Link> */}
            <Nav.Link href="/about" className="menu-item">About Us</Nav.Link>
            {/* <Nav.Link href="/contact" className="menu-item contact-item">Contact US</Nav.Link> */}
            </Nav>
            </Navbar.Collapse>
            </Navbar>      
            </React.Fragment>
            )
        }
    }
    