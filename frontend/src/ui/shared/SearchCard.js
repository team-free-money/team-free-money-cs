import React from "react";
import {Badge, Button, Card, Col, Row} from "react-bootstrap";
import {Star} from "react-bootstrap-icons";
import {httpConfig} from "../../utils/httpConfig";
import like, {fetchAllLikes} from "../../store/like";
import scholarships, {fetchAllScholarships, fetchScholarshipsByUserId} from "../../store/scholarships";
import {useDispatch, useSelector} from "react-redux";

export function SearchCard (props) {
    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllLikes())
}
    const {scholarship} = props
    const likes = useSelector((state) => state.likes ? state.likes : [])

    const totalLikes = likes.reduce((previousValue, currentValue) => previousValue + (currentValue.likeScholarshipId = scholarship.scholarshipId ? 1 : 0), 0)



    const clickLike = () => {
        httpConfig.post('/apis/like/', {likeScholarshipId: scholarship.scholarshipId})
            .then(reply => {
                    if (reply.status === 200) {
                        console.log(reply);
                        dispatch(fetchScholarshipsByUserId());
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
                            <Badge bg="secondary">{totalLikes}</Badge>Save
                        </Button>
                    </Col>
                </Row>
            </Card>
        </>
    )
}