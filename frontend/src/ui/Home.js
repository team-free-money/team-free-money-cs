import React from "react"
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import IMG1 from "./about-us.png"
import IMG2 from "./mission.png"
import "./syle.css"
export const Home = () => {
    return (
        <>
            <main className="my-5 text-white p-0">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">

                        <div className="col-md-8 text-center">
                            <h1>About Us</h1>
                            <Container className="bg-transparent text-shadow-dark">
                                <h4 className="text-center">We are Full Stack Web Developer Intern from Deep Dive Coding.</h4>
                                    <Image height={200} width={200} src={IMG1} fluid className="mx-auto d-block mb-5" alt="About Us"/>

                            </Container>
                        </div>
                    </div>
                </div>
            </main>

            <Container as="section">
                <main className="my-5 text-white p-0">
                    <div className="container-fluid text-center text-md-left">
                        <div className="row">
                            <div className="col-md-4">
                            </div>

                                <div className="col-md-8 text-center">
                                    <Container className="bg-transparent text-shadow-dark">
                                        <Image height={275} width={275} src={IMG2} fluid className="mx-auto d-block mb-5" alt="About Us"/>

                                        <h4 className="text-center">To provide a starting point encouraging first steps for people in the community to seek out access for education,
                                            opening opportunities for improved quality of life.</h4>
                                    </Container>
                            </div>
                        </div>
                    </div>
                </main>
            </Container>

        </>
    )
}
