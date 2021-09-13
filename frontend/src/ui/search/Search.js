import {Badge, Button, Card, Col, Container, Row} from "react-bootstrap";
import React from "react";
import {Star} from "react-bootstrap-icons";
import {fetchAllScholarships} from "../../store/scholarships";
import {useDispatch, useSelector} from "react-redux";
import {SearchCard} from "../shared/SearchCard";


export const Search = () => {
    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllScholarships())
        // dispatch(fetchAllScholarshipLikes)
    }
    React.useEffect(initialEffects, [dispatch])
    const scholarships = useSelector(state => state.scholarships ? state.scholarships : [])
    console.log(scholarships)
    return (
        <>
            <Container fluid>
                {scholarships.map(scholarship => <SearchCard key ={scholarship.scholarshipId} scholarship = {scholarship}/>)}
            </Container>
        </>
    )
}
