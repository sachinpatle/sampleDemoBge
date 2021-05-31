import React from 'react'
import Select from 'react-select';
import {
    Form,
    Jumbotron,
    Row,
    Col,
    Button,
    Container
} from "react-bootstrap";

function NameAndAddress({ ...props }) {
    return (
        <div>
            <Button variant="info" block>
                Name/Address
                </Button>
            <br></br>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    Form of Address:
                   </Form.Label>
                <Col sm={3}>
                    <Select
                        value={props.formofaddress}
                        onChange={(e) => { props.setFormOfAddress(e) }}
                        options={props.options}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label className="required-field" column sm={2}>
                    First Name
          </Form.Label>
                <Col sm={2}>
                    <Form.Control
                   onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        name="firstname"
                        type="text"
                        maxLength="100"
                        value={props.fname}
                        required
                        onChange={(e) => { props.setFname(e.target.value) }}
                    />
                </Col>

                <Form.Label column sm={2}>
                    Street Address
          </Form.Label>
                <Col sm={2}>
                    <Form.Control
                         onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        name="streetaddress"
                        maxLength="100"
                        value={props.streetadress}
                        onChange={(e) => { props.setStreetAddress(e.target.value) }}
                    />
                </Col>

                <Form.Label className="required-field" column sm={2}>
                    Country
          </Form.Label>
                <Col sm={2}>
                    <Select
                        value={props.country}
                        onChange={(e) => { props.setCountry(e) }}
                        options={props.countryoptions}
                    />

                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label className="required-field" column sm={2}>
                    Last Name
          </Form.Label>
                <Col sm={2}>
                    <Form.Control
                         onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        name="lname"
                        maxLength="100"
                        value={props.lname}
                        required
                        onChange={(e) => { props.setLname(e.target.value) }}

                    />
                </Col>
                <Form.Label column sm={2}>
                    Street Address 2
          </Form.Label>
                <Col sm={2}>
                    <Form.Control
                         onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        name="street Address"
                        maxLength="100"
                        value={props.streetadress2}
                        onChange={(e) => { props.setStreetAddress2(e.target.value) }}

                    />
                </Col>

                <Form.Label className="required-field" column sm={2}>
                    State/Region
          </Form.Label>
                <Col sm={2}>
                    <Select
                        value={props.state}
                        onChange={(e) => { props.setState(e) }}
                        options={props.stateoptions}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    Company
          </Form.Label>
                <Col sm={2}>
                    <Form.Control
                         onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        name="company"
                        maxLength="100"
                        value={props.company}
                        onChange={(e) => { props.setCompany(e.target.value) }}
                    />
                </Col>

                <Form.Label className="required-field" column sm={2}>
                    City
          </Form.Label>
                <Col sm={2}>
                    <Form.Control
                        name="city"
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        maxLength="100"
                        value={props.city}
                        onChange={(e) => { props.setCity(e.target.value) }}
                        required
                    />
                </Col>

                <Form.Label column sm={2}>
                    Zip/Postal Code
          </Form.Label>
                <Col sm={2}>
                    <Form.Control
                        name="zipcode"
                        maxLength="100"
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        value={props.zipcode}
                        onChange={(e) => { props.setZipcode(e.target.value) }}
                    />
                </Col>
            </Form.Group>

          
        </div>
    )
}

export default NameAndAddress
