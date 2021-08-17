import React from "react";
import {Button, CloseButton, Col, Container, Form, Row} from "react-bootstrap";

export const CreateAccount = () => {
    return (
        <>
            <h1 className="text-center">Create an Account</h1>
            <h6 className="text-center">Access exclusive rankings & reviews, apply for scholarships, and more.</h6>
            <Container className="border border-dark border-3 rounded bg-secondary">
                <Form>
                    <Row>
                        <Col>
                            <CloseButton></CloseButton>
                            <h3>Email:</h3>
                            <Form.Control placeholder="Please use valid email"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Password:</h3>
                            <Form.Control placeholder="********" />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <Button variant="dark">Continue</Button>{' '}
                        </Col>
                    </Row>
                    <Row className="justify-content-center p-5">
                        <h6>Already have an account? Sign-in instead.</h6>
                    </Row>
                </Form>
            </Container>
        </>
    )
}