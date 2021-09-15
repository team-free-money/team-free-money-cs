import React from "react";
import {Badge, Button, Card, Col, Row, Table} from "react-bootstrap";
import {httpConfig} from "../../utils/httpConfig";
import like, {fetchAllLikes} from "../../store/like";
import scholarships, {fetchAllScholarships, fetchScholarshipsByUserId} from "../../store/scholarships";
import {useDispatch, useSelector} from "react-redux";
import {fetchScholarshipByCategoryName, fetchScholarshipsByCategoryAndLikes} from "../../store/scholarshipCategory";
import {fetchUserByUserId} from "../../store/user";
import "./Component.css"

export function SearchCard (props) {
const dispatch = useDispatch()
    const {scholarship, match} = props
    const totalLikes = useSelector(state => state.likes ? state.likes.filter(like => like.likeScholarshipId === scholarship.scholarshipId) :[])
    console.log(totalLikes.length)







    const clickLike = () => {
        httpConfig.post('/apis/like/', {likeScholarshipId: scholarship.scholarshipId})
            .then(reply => {
                    if (reply.status === 200) {
                        console.log(reply);
                        dispatch(fetchScholarshipsByUserId())
                        // {dispatch(fetchAllLikes())
                        if (match?.params.categoryName) {
                            dispatch(fetchScholarshipsByCategoryAndLikes(match.params.categoryName));
                        }



                        console.log(scholarship)
                    }
                    console.log(reply);
                }
            )};

    return(
        <>
            <Card>
                <Card.Header className="text-center Header"><h2>New Mexico Scholarship Finder</h2></Card.Header>

                        <Card.Body>
                            <Card.Title className="Name">{scholarship.scholarshipName}</Card.Title>
                            <Card.Text>
                                <Row>
                                    <Col md={4} className="border border-2 border-dark">
                                        <h6>Description</h6>
                                        <hr/>
                                        {scholarship.scholarshipDescription}
                                    </Col>
                                    <Col md={2} className="border border-2 border-dark" >
                                        <h6>Deadline</h6>
                                        <hr/>
                                        {scholarship.scholarshipDeadline}
                                    </Col>
                                    <Col md={2}  className="border border-2 border-dark">
                                        <h6>Amount</h6>
                                        <hr/>
                                        {scholarship.scholarshipAmount}
                                    </Col>
                                    <Col md={4} className="border border-2 border-dark">
                                        <h6>Criteria</h6>
                                        <hr/>
                                        {scholarship.scholarshipCriteria}
                                    </Col>

                                </Row>
                                    <Row className="m-3">
                                        <Col md={10}>
                                        <a className="text-info" href={scholarship.scholarshipLink}>Click for more information</a>
                                        </Col>
                                        <Col md={2}>
                                            <Button onClick = {clickLike} variant="info" style={{marginLeft: "auto", display:"block"}}>
                                                <Badge bg="secondary">{scholarship.likeCount}</Badge>Like
                                            </Button>
                                        </Col>

                                    </Row>

                            </Card.Text>
                        </Card.Body>

            </Card>
        </>
    )
}