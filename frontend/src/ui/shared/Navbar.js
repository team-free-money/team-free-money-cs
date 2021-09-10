
import React from "react"
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../../images/logoteam.png"
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCategories} from "../../store/category";
import {Link} from "react-router-dom";

export function Navigation () {
    const dispatch = useDispatch()
    const initialeffects = () => {
        dispatch(fetchAllCategories())
    }
    const categories = useSelector(state => state.categories ? state.categories : [])
    React.useEffect(initialeffects, [dispatch])
    console.log(categories)
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <img src={logo} className="m-3 rounded-circle text-dark" alt=""/>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#About">About Us</Nav.Link>
                            <Nav.Link href="#Mission">Our Mission</Nav.Link>
                            <NavDropdown title="Scholarship" id="collapsible-nav-dropdown">
                                {categories.map(category => <Link key={category.categoryId} exact = "true" to={`/category/${category.categoryName}`}>
                                 <NavDropdown.Item as = "div">{category.categoryName}</NavDropdown.Item></Link>)}
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
                        <Nav.Link href="#memes">Sign up</Nav.Link>
                    </Nav>
                </Container>

            </Navbar>
        </>
    )
}