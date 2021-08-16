import {Card, Col, Container, Row} from "react-bootstrap";
import React from "react";
import {Star} from "react-bootstrap-icons";




export const PostCard = () => {
    return (
        <>
            <Container fluid>
                <Card>
                    <Card.Header className="text-center">Scholarship Search Results</Card.Header>

                    <Row>
                        <Col sm={1} >
                            <Star className="m-5" size={50}/>
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>Name of Scholarship</Card.Title>
                                <Card.Text>
                                    ......
                                </Card.Text>
                            </Card.Body>
                        </Col>


                    </Row>

                </Card>
            </Container>
        </>
    )
}
