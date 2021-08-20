import React from "react"
import {Button, Col, Container, Form, FormControl, Image, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import Logo from "../images/logoteam.png"
export const Header = () => {
    return (
        <>

            <Row>
                <Col md={2}>
                    <Image className="mt-3" width={150} height={150} src={Logo} alt="team-logo"/>
                </Col>
                <Col md={8}>
                    <h1>Scholarships for New Mexico Students</h1>
                </Col>
                <Col md={2}>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search..."
                            className="mr-2"
                            aria-label="Search"
                        />
                    </Form>
                    <Nav className="">
                        <Navbar.Brand href="/login">Log In</Navbar.Brand>
                        <Navbar.Brand href="/create-account">Sign Up</Navbar.Brand>
                    </Nav>
                </Col>
            </Row>

        </>
    )
}