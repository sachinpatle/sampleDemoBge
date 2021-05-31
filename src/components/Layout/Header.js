import React from 'react'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import SettingsIcon from '@material-ui/icons/Settings';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Logo from '@material-ui/icons/AndroidOutlined';
import './Header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import img1 from '../../images/nlogo.jpg'
function Header() {
    return (
        <Navbar
            bg='info'
            variant="dark"
            expand="md"
            collapseOnSelect>
            <Navbar.Brand>
                <img src={img1}  width="50px"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    {/* <div className="header"> */}
                        <div className="header__leftnav">
                            {/* <Logo className="header_logo" /> */}
                            <LinkContainer to="/Bunge">
                                <Nav.Link>Home </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/Bunge/markets">
                                <Nav.Link>Markets </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/Bunge/productservices">
                                <Nav.Link>Products&Services </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/Bunge/mylocation">
                                <Nav.Link>My Location </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/Bunge/registration">
                                <Nav.Link>Registration </Nav.Link>
                            </LinkContainer>
                        </div>
                        <div className="header__rightnav">
                        <LinkContainer to="">
                            <div>  <SearchSharpIcon /></div>
                          
                            </LinkContainer>

                            <LinkContainer to="/">
                                <div className="nav_icons">  <SettingsIcon /></div>
                          
                            </LinkContainer>
                            
                            <LinkContainer to="/">
                                <div className="nav_icons"> <LocationOnOutlinedIcon /></div>
                           
                            </LinkContainer>
                            
                            <LinkContainer to="/">
                                <div className="nav_icons"><AccountBoxIcon /></div>
                            
                            </LinkContainer>
                        </div>
                    {/* </div> */}


                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
