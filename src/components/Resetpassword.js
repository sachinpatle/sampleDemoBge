import React, { useState } from 'react';
import {
  Jumbotron,  Container, Row, Col, Form, Button,Spinner
} from "react-bootstrap";

import './Login.css'
import { ToastContainer, toast } from 'react-toastify'
import {RESET_PASSWORD_GUR} from '../api/api'
import {Link ,useHistory} from 'react-router-dom'
function ResetPassword({formSwitchFun}) {
    const history = useHistory()
    const [password, setPassword] = useState("");
    const [conpassword, setConPassword] = useState("");
    const [username, setUserName] = useState("");
    const [loading, setLoading] = useState(false);
    
    const SubmitResetPassword = (e) => {
        setLoading(true)
        fetch(`${RESET_PASSWORD_GUR}/${username}`, {
            method:"post",
            headers:{
                "Content-Type": "application/json"
            }
        }).then(res => res.text())
            .then(res => {
               
                console.log(res)
                setLoading(false)
                if(res == "Please enter valid username")
                {
                    toast.error(res);
                }
                else{
                    toast.success(res);
                    history.push('/Bunge/confirm_email_message')
                }
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
                toast.error("catch block");
            })
        e.preventDefault()
    }
    return (
        <>
        {
            loading ?
                <div>
                    {<Spinner className="spinner" animation="border" variant="success" />}
                </div>
                :
            <Jumbotron className="resetpassword">
            <Container>
                <Row>
                    <Col>
                        <h3>Reset Password</h3>
                        <hr />
                        <Form onSubmit={(e) => { SubmitResetPassword(e) }}>
                        <Form.Group>
                            <Form.Label>User Name</Form.Label>
                            <Form.Control
                                type="username"
                                name="username"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => { setUserName(e.target.value) }}
                                required
                            />
                        </Form.Group>
                            {/* <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    required
                                />
                            </Form.Group> */}
                            {/* <Form.Group>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="conpassword"
                                    value={password}
                                    onChange={(e) => { setConPassword(e.target.value) }}
                                    required
                                />
                            </Form.Group> */}
                            
                            <Button type="submit" className="login_button">Reset Password</Button>

                        </Form>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/Bunge/login">Loggin Now</Link>
                    </Col>
                </Row>
            </Container>
            </Jumbotron>
        }
        </>
    )
}

export default ResetPassword
