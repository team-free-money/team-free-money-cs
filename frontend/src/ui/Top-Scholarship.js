import React from "react"
import {Card, Col, Container, Row} from "react-bootstrap";
import {Star} from "react-bootstrap-icons";
import {height, width} from "@fortawesome/free-solid-svg-icons/faAd";


export const TopScholarship = () => {
    return (
        <>

            <Container fluid>
                <Row>
                    <Col className="border border-dark border-2 text-center"><h1>Top Scholarships</h1></Col>
                </Row>

            </Container>

            <Container fluid>
                    <Card>
                        <Card.Header>Name of Scholarship</Card.Header>

                            <Row>
                                <Col sm={1} >
                                    <Star className="m-5" size={50}/>
                                </Col>
                                <Col>
                                    <Card.Body>
                                    <Card.Title>Name of school</Card.Title>
                                    <Card.Text>
                                        It's gonna change depending on likes.
                                    </Card.Text>
                        </Card.Body>
                                </Col>


                            </Row>

                    </Card>
            </Container>




        </>
    )
}
