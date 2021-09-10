import React from "react";
import {Badge, Button, Card, Col, Row} from "react-bootstrap";
import {Star} from "react-bootstrap-icons";

export function SearchCard (props) {
    const {scholarship} = props
    return(
        <>
            <Card>
                <Card.Header className="text-center">Scholarship Search Results</Card.Header>

                <Row>
                    <Col sm={1} >
                        <Star className="m-5" size={50}/>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{scholarship.scholarshipName}</Card.Title>
                            <Card.Text>
                                {scholarship.scholarshipDescription}
                                {scholarship.scholarshipLink}
                                {scholarship.scholarshipDeadline}
                                {scholarship.scholarshipAmount}
                                {scholarship.scholarshipCriteria}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col>
                        <Button variant="info" style={{marginLeft: "auto", display:"block"}}>
                            #likes <Badge bg="secondary">9</Badge>
                            <span className="visually-hidden"></span>
                        </Button>
                    </Col>


                </Row>

            </Card>
        </>
    )
}