import React from "react"
import {Button, Container, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Form} from "formik";

export function Navigation () {

    return (
        <>
            <Container>
            <Navbar bg="light" expand="lg" className="border border-dark rounded">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">
                            <Nav.Link href="/search">Native American</Nav.Link>
                            <Nav.Link href="/search">Hispanic</Nav.Link>
                            <Nav.Link href="/search">New Student</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Nav className="">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Brand href="/login">Log In</Navbar.Brand>
                    <Navbar.Brand href="/create-account">Sign Up</Navbar.Brand>
                </Nav>
            </Navbar>
            </Container>
        </>
    )
}