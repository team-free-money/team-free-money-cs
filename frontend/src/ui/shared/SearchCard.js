import React from "react";
import {Badge, Button, Card, Col, Row} from "react-bootstrap";
import {Star} from "react-bootstrap-icons";
import {httpConfig} from "../../utils/httpConfig";
import like, {fetchAllLikes} from "../../store/like";
import scholarships, {fetchAllScholarships} from "../../store/scholarships";
import {useDispatch} from "react-redux";

export function SearchCard (props) {
    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllLikes())
}
    const {scholarship} = props

    const clickLike = () => {
        httpConfig.post('/apis/like/', {likeScholarshipId: scholarship.scholarshipId})
            .then(reply => {
                    if (reply.status === 200) {
                        console.log(reply);
                        dispatch(fetchAllLikes());
                    }
                    console.log(reply);
                }
            )};

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
                                {scholarship.scholarshipDeadline}
                                {scholarship.scholarshipAmount}
                                {scholarship.scholarshipCriteria}
                                {scholarship.scholarshipLink}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col>
                        <Button onClick = {clickLike} variant="info" style={{marginLeft: "auto", display:"block"}}>
                            <Badge bg="secondary">{scholarship.likeCount}</Badge>Save
                            <span className="visually-hidden"></span>

                        </Button>
                    </Col>
                </Row>
            </Card>
        </>
    )
}