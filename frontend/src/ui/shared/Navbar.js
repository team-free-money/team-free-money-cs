import React, {useEffect, useState} from "react"
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../../images/logoteamtransparent.png"

import {useDispatch, useSelector} from "react-redux";
import {fetchAllCategories} from "../../store/category";
import {Link} from "react-router-dom";
import {fetchAuth} from "../../store/auth";
import {SignUpModal} from "./components/main-nav/sign-up/SignUpModal";
import {SignInModal} from "./components/main-nav/sign-in/SignInModal";
import {SignInForm} from "./components/main-nav/sign-in/SignInForm";
import {SignUpForm} from "./components/main-nav/sign-up/SignUpForm";
import {SignOut} from "./components/main-nav/SignOut";


export function Navigation (props) {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const initialeffects = () => {
        dispatch(fetchAllCategories())
        dispatch(fetchAuth());
    }
    const inputs = [];
    useEffect(initialeffects, inputs);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // isModalOpen prevents the sign in modal being removed from the dom before the
    // sign-in modal is closed by the UpdateUser
    const isModalOpen = ()=> {
        if(!auth) {
            return !auth
        } else if(show === true && auth  ) {
            return true
        }
    }

    const categories = useSelector(state => state.categories ? state.categories : [])
    React.useEffect(initialeffects, [dispatch])
    console.log(categories)
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <img src={logo} className="m-3 rounded-circle text-dark" alt="" width={120}/>
                    <Navbar.Brand href="/">NMSF</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/*<Nav.Link href="#About">About Us</Nav.Link>*/}
                            {/*<Nav.Link href="#Mission">Our Mission</Nav.Link>*/}
                            <NavDropdown className="navbar-brand active" title="Scholarship" id="collapsible-nav-dropdown">
                                {categories.map(category => <Link key={category.categoryId} exact = "true" to={`/category/${category.categoryName}`}>
                                    <NavDropdown.Item as = "div">{category.categoryName}</NavDropdown.Item></Link>)}
                            </NavDropdown>
                        </Nav>

                        {/*    <Form className="d-flex">*/}
                        {/*        <FormControl*/}
                        {/*            type="search"*/}
                        {/*            placeholder="Search..."*/}
                        {/*            className="mr-2"*/}
                        {/*            aria-label="Search"*/}
                        {/*        />*/}
                        {/*        <Button variant="outline-success">Search</Button>*/}
                        {/*    </Form>*/}

                    </Navbar.Collapse>
                </Container>
                <Nav>
                    {auth ? (
                        <>
                            <Navbar.Text>
                                <h5 className="text-info">Signed in as: <a href={auth?.userName ?? ''}></a></h5>
                            </Navbar.Text>
                            <NavDropdown title={auth?.userName ?? ''} id = 'basic-nav-dropdown'>
                                <NavDropdown.Item href = '/userhome'>My Likes</NavDropdown.Item>
                            </NavDropdown>
                            <SignOut />
                        </>
                    ) : (
                        isModalOpen() && (
                            <>
                                <SignUpModal />
                                <SignInModal show = {show} handleClose = {handleClose} handleShow = {handleShow} />
                            </>
                        ))}
                </Nav>
            </Navbar>
        </>
    );
}