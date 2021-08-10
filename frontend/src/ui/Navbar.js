import React from "react"
import {Container, Nav, Navbar} from "react-bootstrap";

export function Navigation () {

    return (
        <Navbar className="border border-3 rounded" bg="light" variant="light">
            <div className="container">
            <Nav>
                <Navbar.Brand href="/">Native American</Navbar.Brand>
                <Navbar.Brand href="/">Hispanic</Navbar.Brand>
                <Navbar.Brand href="/">New College Student</Navbar.Brand>
                <div>
                    <Navbar.Brand href="/">Title</Navbar.Brand>
                    <Navbar.Brand href="/">Title</Navbar.Brand>
                </div>
            </Nav>
            </div>
        </Navbar>
    )
}