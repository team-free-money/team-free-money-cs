import React from "react"
import {Button, Col, Container, Row} from "react-bootstrap";
export const UserHome = () => {
    return (
        <>
           <Container className="justify-content-center d-flex mx-auto">

                       <Button href="/topscholarship" variant="primary m-2">Go to Top Scholarships Page</Button>
                       <Button href="/scholarshipsubmission" variant="primary m-2">Submit a New Scholarship</Button>
           </Container>
            <Container className="justify-content-center d-flex mx-auto mt-5">
              <h2>Your Favorite</h2>
            </Container>
        </>
    )
}