import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import PasswordStrengthMeter from '../PasswordStrengthMeter'
import '../Registration.css'

import {
    Form,
    Jumbotron,
    Row,
    Col,
    Button,
    Container
} from "react-bootstrap";

function Account({ setUserName, username, setPassword, password, isPasswordShown, togglePasswordVisiblity ,setDOB,dob}) {
    return (
        <div>
            <Button variant="info" block>
                Account
        </Button>
            <br></br>
            <Form.Group as={Row}>
                <Form.Label className="required-field" column sm={3}>
                    User Name
          </Form.Label>
                <Col sm={3}>
                    <Form.Control
                    label="user name"
                        name="username"
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        maxLength="50"
                        value={username}
                        required
                        onChange={(e) => { setUserName(e.target.value) }}
                        variant="outlined"
                    />
                </Col>
                <br></br>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label className="required-field" column sm={3}>
                    Password
                   </Form.Label>
                <Col sm={3}>

                <Form.Control
                       name="password"
                       value={password}
                       type="password"
                       required
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        maxLength="50"
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                     <span className="passwordstrength">
                                <PasswordStrengthMeter password={password} />
                            </span>
                </Col>
            </Form.Group>
            <Form.Group  className="dob_formgroup" as={Row}>
                <Form.Label column sm={3}>
                   Date of Birth
          </Form.Label>
                <Col sm={3}>
                    <Form.Control
                       type="date"
                       onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                       name="dob"
                       value={dob}
                       onChange={(e) => { setDOB(e.target.value) }}
                       variant="outlined"
                    />
                </Col>
            </Form.Group>
        </div>
    )
}

export default Account
