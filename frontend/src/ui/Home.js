import React from "react"
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import IMG3 from "../images/team.png"
import "./style.css"
import {Search} from "./search/Search";
import {SearchCard} from "./shared/SearchCard";
import scholarships from "../store/scholarships";

export const Home = () => {
    return (
        <>


            <Container as={"section"} className='mt-3 mb-4 p-2' id="About">

                <Row className="g-5">
                    <Col xs={10} md={6} className="d-block mx-auto bg-white p-5 bg-transparent">
                        <Image height={350} width={350} src={IMG3} fluid className="mx-auto d-block mb-5" alt="puzzle"/>
                    </Col>
                    <Col xs={10} md={6} className="my-auto my-auto fst-italic font-italic">
                        <h2 className="text-center">About Us</h2>
                        <h3 className="text-center">
                            We are Full stack Web Developer Intern at Deep Dive Coding. We build this website as our capstone project.
                        </h3>
                        <h3 className="text-center">Our goal is to provide a starting point encouraging first steps for people in the community to seek out access for education, opening opportunities for improved quality of life.</h3>
                    </Col>
                </Row>
            </Container>

            <Container>
                <h1 className="text-center text-light">Top 5 Scholarships</h1>
                <Search />
            </Container>
        </>
    )
}

