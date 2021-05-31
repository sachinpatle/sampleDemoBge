import React from 'react'
import {
    Form,
    Jumbotron,
    Row,
    Col,
    Button,
    Container
} from "react-bootstrap";

function Communication({...props}) {
    return (
        <div>
            <Button variant="info" block>
                Communication
        </Button>
        <br></br>
            <Row>
                <Col>
                    <Form.Group>
                    <Col sm={6}>
                        <Form.Label className="required-field">Phone</Form.Label>
                        </Col>
                        <Col sm={8}>
                        <Form.Control
                            type="Phone"
                            name="Phone"
                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                            value={props.phone}
                            onChange={(e) => { props.setPhone(e.target.value) }}
                            required
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group>
                    <Col sm={6}>
                        <Form.Label className="required-field">Email Address: </Form.Label>
                        </Col>
                        <Col sm={8}>
                        <Form.Control
                            type="email"
                            name="email"
                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                            value={props.emailaddress}
                            required
                            onChange={(e) => { props.setEmailaddress(e.target.value) }}
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                    <Col sm={6}>
                        <Form.Label className="required-field">Confirm Email Address:</Form.Label>
                        </Col>
                        <Col sm={8}>
                        <Form.Control
                            type="email"
                            name="conemail"
                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                            required
                            value={props.conemailaddress}
                            onChange={(e) => { props.setConemailaddress(e.target.value) }}
                        />
                        </Col>
                    </Form.Group>
                </Col>
                <Col>
                    <h4>sign up for alert</h4>
                    <Form.Group id="location">
                        <Form.Check
                            type="checkbox"
                            label="Location"
                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                            name="location"
                            onChange={(e) => { props.setLocation(e.target.checked) }}
                            checked={props.location} />
                    </Form.Group>
                    <Form.Group id="marketalert">
                        <Form.Check
                            type="checkbox"
                            label="Market Alerts"
                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                            name="market"
                            onChange={(e) => { props.setMarket(e.target.checked) }}
                            checked={props.market} />
                    </Form.Group>
                    <Form.Group id="cash_bid_noti">
                        <Form.Check
                            type="checkbox"
                            label="Cash Bid Notifications"
                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                            name="cashbidnotification"
                            onChange={(e) => { props.setCashBidNotification(e.target.checked) }}
                            checked={props.cashbidnotification} />
                    </Form.Group>

                    <Col sm={10}>
                        <Form.Check
                            type="radio"
                            label="Alerts by Email"
                            name="alertsbyemail"
                            id="alertsbyemail"
                            value="alertsbyemail"
                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                            checked={props.signupalert == "alertsbyemail"}
                            onChange={(e) => { props.setSignupalert(e.target.value) }}
                        />
                        <Form.Check
                            type="radio"
                            label="Alerts by Phone"
                            name="alertsbyemail"
                            id="alertsbyphone"
                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                            value="alertsbyphone"
                            checked={props.signupalert == "alertsbyphone"}
                            onChange={(e) => { props.setSignupalert(e.target.value) }}
                        />
                        <Form.Check
                            type="radio"
                            label="Both Email and Phone"
                            name="alertsbyemail"
                            id="bothemailandphone"
                            value="bothemailandphone"
                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                            checked={props.signupalert == "bothemailandphone"}
                            onChange={(e) => { props.setSignupalert(e.target.value) }}
                        />
                    </Col>
                    <Form.Group as={Row}>
                        <Form.Label column sm={4}>
                            Mobile Phone:
                   </Form.Label>
                        <Col sm={6}>
                            <Form.Control
                                type="mobilephone"
                                name="mobilephone"
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                value={props.mobileno}
                                onChange={(e) => { props.setMobileNo(e.target.value) }}

                            />
                        </Col>
                    </Form.Group>
                    <p>Upon receipt of your
                    submission for text alerts,
                    Bunge will send an opt-in confirmation text message.
                     Mobile phone carrier message & data rates may apply</p>

                </Col>
            </Row>
        </div>
    )
}

export default Communication
