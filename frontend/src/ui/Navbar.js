import React from "react"
import {Button, Container, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Form} from "formik";

export function Navigation () {

    return (
        <>
            <Container>
            <Navbar bg="light" expand="lg" className="border border-dark rounded">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Navbar.Brand className="p-2" href="/">Home</Navbar.Brand>
                            <Navbar.Brand className="p-2" href="/search">General</Navbar.Brand>
                            <Navbar.Brand className="p-2" href="/search">Native American</Navbar.Brand>
                            <Navbar.Brand className="p-2" href="/search">Veteran</Navbar.Brand>
                            <Navbar.Brand className="p-2" href="/search">Women</Navbar.Brand>
                            <Navbar.Brand className="p-2" href="/search">Hispanic</Navbar.Brand>
                            <Navbar.Brand className="p-2" href="/search">Freshman</Navbar.Brand>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
            </Container>
        </>
    )
}