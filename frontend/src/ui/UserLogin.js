import React from "react";
import {Button, CloseButton, Col, Container, Form, Row} from "react-bootstrap";

export const UserLogin = () => {
    return (
        <>
            <h1 className="text-center">Login</h1>
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
                        <h6>Don't have a login? Create an account instead.</h6>
                    </Row>
                </Form>
            </Container>
        </>
}