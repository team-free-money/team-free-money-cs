import React from "react"
import {Button, Container, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Form} from "formik";

export function Navigation () {

    return (
        <>
            <Container>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">
                            <Nav.Link href="/search">Native American</Nav.Link>
                            <Nav.Link href="#link">Hispanic</Nav.Link>
                            <Nav.Link href="#link">New Student</Nav.Link>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Nav className="">
                    <Navbar.Brand href="/userlogin">Log In</Navbar.Brand>
                    <Navbar.Brand href="/login">Sign Up</Navbar.Brand>
                </Nav>
            </Navbar>
            </Container>
        </>
    )
}