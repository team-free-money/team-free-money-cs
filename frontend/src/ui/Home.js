import React from "react"
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import IMG1 from "../images/Aboutus.png"
import IMG2 from "./mission.png"
import "./style.css"
export const Home = () => {
    return (
        <>

            <Container as={"section"} className='mt-3 mb-4 p-2' id="About">

                <Row className={"g-5"}>
                    <Col xs={10} md={6} className="d-block mx-auto bg-white p-5 bg-transparent">
                        <Image height={275} width={275} src={IMG1} fluid className="mx-auto d-block mb-5" alt="About Us"/>

                    </Col>
                    <Col xs={10} md={6} className="my-auto my-auto fst-italic font-italic">
                        <h2 className="text-center">About Us</h2>
                        <h3>
                            We are Full stack Web Developer Intern at Deep Dive Coding. We build this website as our capstone project.
                        </h3>
                    </Col>
                </Row>
            </Container>
                        <Container as={"section"} className='p-1' id="Mission">
                            <Row className={"g-0"}>
                                <Col xs={10} md={6} className="d-block mx-auto bg-white p-5 bg-transparent">
                                    <Image height={500} width={500} src={IMG2} fluid className="mx-2 d-block" alt="Mission"/>
                                </Col>
                                <Col className="my-auto fst-italic font-italic">
                                    <h3>
                                        Our goal is to provide a starting point encouraging first steps for people in the community to seek out access for education,
                                        opening opportunities for improved quality of life.
                                    </h3>
                                </Col>
                            </Row>

                        </Container>

        </>
    )
}