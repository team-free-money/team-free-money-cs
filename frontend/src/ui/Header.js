import React from "react"
import {Button, Col, Container, Form, FormControl, Image, NavDropdown, Row} from "react-bootstrap";
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
                    <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Col>
            </Row>

        </>
    )
}