import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../img/Bitmap.png'

// const yearNow = new Date().getFullYear(); - заготовка для года

const Footer = () => {
    return(
    <Container className="footer-container">
        <Row xs={1} md={1} lg={2} xl={2}>
            <Row xs={1} md={2} lg={2} xl={2} className="row-footer-first">
                <Col>
                    <div>
                        <h4>Express</h4>
                        <p>All Rights Reserved to info.com</p>
                        <p>&copy; DDD – Web Marketing</p>
                        <p>Privacy Policy</p>
                        <img src={logo} className="logo-footer" alt="logo"/>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h5>CONTACT US</h5>
                        <Row className="row-contacts">
                            <Col className="col-phone" md="auto">UK</Col>
                            <Col>
                                <a className="no-link" href="tel:info@info.com">+44-2020202020</a> <br></br>
                                <a className="no-link" href="tel:info@info.com">+44-2020202020</a>
                            </Col>
                        </Row>
                        <Row className="row-contacts">
                            <Col className="col-phone" md="auto">AUT</Col>
                            <Col>
                                <a className="no-link" href="tel:info@info.com">+44-2020202020</a> 
                            </Col>
                        </Row>
                        <Row className="row-contacts">
                            <Col className="col-phone" md="auto">AUS</Col>
                            <Col>
                                <a className="no-link" href="tel:info@info.com">+44-2020202020</a> 
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={2} xl={2} >
                <Col>
                    <Row xs={1} md={2} lg={1} xl={1} className="row-adres">
                        <Col>
                            <div>
                                <h5>ADDRESS</h5>
                                <p>Lorem ipsum set amet</p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h5>OUR OFFICE HOURS</h5>
                                <p>Mon-Fr: 8:00-18:00 GMT Sat/Su: Closed</p>
                            </div>
                        </Col>
                    </Row>                    
                </Col>
                <Col>
                    <div>
                        <h5>Email US</h5>
                        <a className="no-link" href="mailto:info@info.com">info@info.com</a>
                    </div>
                </Col>
            </Row>
        </Row>
    </Container>
    )
}

export default Footer