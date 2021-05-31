import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

function AdminHeader() {
    return (
        <div>
            <h2>ADMIN</h2>
            <Navbar bg="light" variant="light">
            <Nav.Link to="">User Profile</Nav.Link>
                <Nav className="mr-auto">
                <LinkContainer to="/Bunge/Contracts">
                    <Nav.Link>Contracts</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Bunge/CreateContract">
                    <Nav.Link>Create Details</Nav.Link>
                    </LinkContainer>
                    <Nav.Link>Settlements</Nav.Link>
                    <Nav.Link>Payments</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default AdminHeader
