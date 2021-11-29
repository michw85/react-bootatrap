import React, {useState} from "react"
import {Container, Form, Row, Col, Button } from 'react-bootstrap'
// Подключили библиотеку для ввожа номера по коду страны: npm install react-phone-number-input --save
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function Forms() {
    // Хук для изменения состяния флага/кода страны, исходя из выбора названия страны
    const [value, setValue] = useState()
    return (
        <Container>           
            <Form className="form">
                <div className="form-title">
                <h2 className="form-title-blue">Contact</h2><h2 className="form-title-black"> Us</h2>
            </div>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter text" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                    {/* <Form.Control type="password" placeholder="Password" /> */}
                    <Form.Control type="text" placeholder="Last name" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPhone">
                    {/* <Form.Control type="phone" placeholder="" /> */}
                    <PhoneInput
                    className="form-control"
                        defaultCountry="US"
                        placeholder="+1"
                        value={value}
                        onChange={setValue}/>
                    </Form.Group>
                    

                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Row>

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control as="textarea" rows={3} placeholder="Tell Us What Happened" />
                </Form.Group>
                <div className="btn-form">
                    <Button variant="dark" type="submit" >
                        Send
                    </Button>
                </div>
            </Form>
        </Container>
    );
  }
  
  export default Forms;