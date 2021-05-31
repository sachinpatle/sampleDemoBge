import React from 'react'
import {
    Jumbotron, Container, Row, Col, Form, Button, Spinner
} from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom'
function ConfirmEmailMessage() {
    const history = useHistory()
    return (
        <Jumbotron className="confirm_email_message">
            <h2>Check Your Email</h2>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/Bunge/reset_password">
                <Button variant="success" block>
                    continue
        </Button>
            </Link>
        </Jumbotron>
    )
}
export default ConfirmEmailMessage
