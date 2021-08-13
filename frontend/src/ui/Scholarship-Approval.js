import React from "react"
import {Col, Container, FormControl, Row,} from "react-bootstrap";
import {Form} from "formik";

export const ScholarshipApproval = () => {
    return (
        <>
            <Form>
                <Row>
                    <Col>
                        <FormControl placeholder="First name" />
                    </Col>
                    <Col>
                        <FormControl placeholder="Last name" />
                    </Col>
                </Row>
            </Form>
        </>
    )
}

