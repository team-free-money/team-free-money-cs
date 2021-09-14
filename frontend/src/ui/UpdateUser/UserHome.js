import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {EditUserForm} from "./EditUserForm";
import user, { fetchUserByUserId} from "../../store/user";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {fetchScholarshipsByUserId} from "../../store/scholarships";
import {SearchCard} from "../shared/SearchCard";
import {fetchAllLikes} from "../../store/like";
export const UserHome = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => {return state.user ? state.user : null})
    const scholarships = useSelector(state => state.scholarships ?? [])
    const sideEffects = () => {
        dispatch(fetchUserByUserId())
        dispatch(fetchScholarshipsByUserId())
        dispatch(fetchAllLikes())
    }
    console.log(scholarships)
    React.useEffect(sideEffects, [dispatch])
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        {scholarships.map(scholarship => <SearchCard key ={scholarship.scholarshipId} scholarship = {scholarship}/>)}
                    </Col>
                </Row>
            </Container>
        </>
    )
};