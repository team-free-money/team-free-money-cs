import React from "react"
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import IMG1 from "./about-us.png"
import IMG2 from "./mission.png"
import "./syle.css"
export const Home = () => {
    return (
        <>
            <Container as={"section"} className='p-1'>
                <Row className={"g-0"}>
                    <Col xs={10} md={6} className="d-block mx-auto bg-white p-5">
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
            <Container as={"section"} className='mt-3 mb-4 p-2'>

                <Row className={"g-5"}>
                    <Col className="my-auto">
                        <p>
                            Travel time to the nearest starbase? I think you've let your personal feelings cloud your
                            judgement. When has justice ever been as simple as a rule book? About four years. I got tired of
                            hearing how young I looked. We could cause a diplomatic crisis. Take the ship into the Neutral Zone
                            Why don't we just give everybody a promotion and call it a night - 'Commander'? And blowing into
                            maximum warp speed, you appeared for an instant to be in two places at once. Shields up! Rrrrred
                        </p>
                    </Col>
                    <Col xs={10} md={6} className="d-block mx-auto bg-white p-5">
                        <Image height={275} width={275} src={IMG1} fluid className="mx-auto d-block mb-5" alt="About Us"/>
                        <h2 className="text-center">About Us</h2>

                    </Col>

                </Row>
            </Container>
        </>
    )
}
