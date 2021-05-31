import React, { useState } from 'react';
import {
    Jumbotron,  Container, Row, Col, Form, Button,Spinner
} from "react-bootstrap";

import {Link} from 'react-router-dom'
import  './Login.css'
import {LOGIN_API} from '../api/api'
import { ToastContainer, toast } from 'react-toastify'
import {useDispatch} from 'react-redux'
function Login({ formSwitchFun }) {
 const dispatch = useDispatch()
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const SubmitLogin = (e) => {
        setLoading(true)
        fetch(`${LOGIN_API}/${username}/${password}`, {
            method:"get",
            headers:{
                "Content-Type": "application/json"
            }
        }).then(res => res.text())
            .then(res => {
                setLoading(false)
                console.log(res)
                if(res == '"SUCCESS"')
                {
                    toast.success("Login Successful !",{position: "top-center"});
                }
                else
                {
                    toast.error(res,{position: "top-center"});
                }
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
                // dispatch({type:"USER"})
                toast.error("catch block",{position: "top-center"});
            })
        e.preventDefault()
       
        //api call to submit data
    }
    return (
        <>
        {
            loading ?
                <div>
                    {<Spinner className="spinner" animation="border" variant="success" />}
                </div>
                :
        <Jumbotron className="login">
        <Container>
            <Row>
                <Col>
                    <h3>Login</h3>
                    <hr />
                    <Form onSubmit={(e) => { SubmitLogin(e) }}>
                        <Form.Group>
                            <Form.Label>User Name</Form.Label>
                            <Form.Control
                                type="username"
                                name="username"
                                placeholder="Enter Username"
                                value={username}
                                onChange={(e) => { setUserName(e.target.value) }}
                             
                              
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                required
                            />
                        </Form.Group>
                        <Button type="submit" className="login_button">Login</Button>

                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/Bunge/reset_password">Forget Password?</Link>
                </Col>
            </Row>
            <Row className="py-4">
                <Col>
                   <b> Are you new here?</b> <Link to="/Bunge/registration">Register Now</Link>
                </Col>
            </Row>
        </Container>
        </Jumbotron>
    }
    </>
       
    )
}

export default Login
