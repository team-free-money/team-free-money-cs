import React from "react"

import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../images/logoteam.png"

import {Container, Nav, Navbar} from "react-bootstrap";

export function Navigation () {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <img src={logo} className="m-3 rounded-circle" alt=""/>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Our Mission</Nav.Link>
                            <Nav.Link href="#">About Us</Nav.Link>
                            <NavDropdown title="Scholarship" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#">General</NavDropdown.Item>
                                <NavDropdown.Item href="#">Veteran</NavDropdown.Item>
                                <NavDropdown.Item href="#">Native American</NavDropdown.Item>
                                <NavDropdown.Item href="#">Women</NavDropdown.Item>
                                <NavDropdown.Item href="#">Hispanic</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Container className="justify-content-end">
                        <Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search..."
                                    className="mr-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                            <Nav.Link href="#deets">Log In</Nav.Link>
                            <Nav.Link href="#memes">
                                Sign up
                            </Nav.Link>
                        </Nav>
                </Container>

            </Navbar>
        </>
    )
}