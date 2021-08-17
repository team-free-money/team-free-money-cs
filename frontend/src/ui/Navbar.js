import React from "react"
import {Button, Container, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Form} from "formik";

export function Navigation () {

    return (
        <>
            <Container fluid>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">
                            <Nav.Link href="#home">Native American</Nav.Link>
                            <Nav.Link href="#link">Hispanic</Nav.Link>
                            <Nav.Link href="#link">New Student</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Nav className="">
                    <Navbar.Brand href="#home">Log In</Navbar.Brand>
                    <Navbar.Brand href="#home">Sign Up</Navbar.Brand>
                </Nav>
            </Navbar>
            </Container>
        </>
    )
}