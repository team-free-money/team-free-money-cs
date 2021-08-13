import React from "react"
import {Card, Col, Container, Row} from "react-bootstrap";
import {Star} from "react-bootstrap-icons";



export const Search = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="border border-dark border-2 text-center"><h1>Top Scholarships</h1></Col>
                </Row>

            </Container>

            <Container fluid>
                <Card>
                    <Card.Header className="text-center">Scholarship Search Results</Card.Header>

                    <Row>
                        <Col sm={1} >
                            <Star className="m-5" size={50}/>
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>Name of school</Card.Title>
                                <Card.Text>
                                    Name of Scholarship with description, criteria, deadline and reward amount
                                    *Link to actual website
                                </Card.Text>
                            </Card.Body>
                        </Col>


                    </Row>

                </Card>
            </Container>

        </>
    )
}
