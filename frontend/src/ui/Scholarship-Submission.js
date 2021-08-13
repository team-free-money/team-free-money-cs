import React from "react"
import {Button, Col, Container, Form, Row} from "react-bootstrap";



export const ScholarshipSubmission = () => {
    return (
        <>
            <h1 className="text-center">Submit a Scholarship</h1>
            <Container className="border border-dark border-3 rounded bg-secondary">
            <Form>
                <Row>
                    <Col className="m-3">
                        <h3>Scholarship Name:</h3>
                        <Form.Control placeholder="Name" />
                    </Col>
                </Row>
                <Row>
                    <Col className="m-3">
                        <h3>Description:</h3>
                        <Form.Control placeholder="Description" />
                    </Col>
                </Row>
                <Row>
                    <Col className="m-3">
                        <h3>Scholarship Criteria:</h3>
                        <Form.Control placeholder="Criteria" />
                    </Col>
                </Row>
                <Row>
                    <Col className="m-3">
                        <h3>Scholarship Deadline:</h3>
                        <Form.Control placeholder="Deadline" />
                    </Col>
                </Row>
                <Row>
                    <Col className="m-3">
                        <h3>Scholarship Reward:</h3>
                        <Form.Control placeholder="Reward" />
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Button variant="dark">Submit</Button>{' '}
                    </Col>
                </Row>
            </Form>
            </Container>
        </>
    )
}



