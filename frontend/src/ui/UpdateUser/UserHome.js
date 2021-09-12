import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {EditUserForm} from "./EditUserForm";
import user, { fetchUserByUserId} from "../../store/user";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export const UserHome = () => {

    const dispatch = useDispatch()
    const profile = useSelector(state => {return state.user ? state.user : null})

    const sideEffects = () => {
        dispatch(fetchUserByUserId())
    }

    React.useEffect(sideEffects, [])
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        {profile && <EditUserForm user={user}/>}
                    </Col>

                </Row>
            </Container>
        </>
    )
};