import React from "react"
import {Button, Col, Container, Row} from "react-bootstrap";
export const UserHome = () => {
    return (
        <>
           <Container className="justify-content-center d-flex mx-auto">

                       <Button variant="primary m-2">Go to Top Scholarships Page</Button>
                       <Button variant="primary m-2">Submit a New Scholarship</Button>
           </Container>
            <Container className="justify-content-center d-flex mx-auto mt-5">
              <h2>Your Favourite</h2>
            </Container>
        </>
    )
}