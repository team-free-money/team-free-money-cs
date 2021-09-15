import React, {useEffect, useState} from "react"
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../../images/logoteam.png"
import logo1 from "../../images/logoteamtransparent.png"
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
                    <img src={logo1} className="m-3 rounded-circle text-dark" alt="" width={110}/>
                    <Navbar.Brand href="/">NMSF</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto justify-content-center">
                            <NavDropdown title="Scholarships" id="collapsible-nav-dropdown">
                                {categories.map(category => <Link key={category.categoryId} exact = "true" to={`/category/${category.categoryName}`}>
                                    <NavDropdown.Item as = "div">{category.categoryName}</NavDropdown.Item></Link>)}
                            </NavDropdown>
                        </Nav>
                        <Container className="justify-content-end">
                            <Nav>

                                {auth ? (
                                    <>
                                <span className="mx-5">
                                <h2>Welcome,
                                    {auth?.userName ?? ''}
                                    </h2>
                                    </span>
                                        <Navbar.Brand href="/userhome">My Likes</Navbar.Brand>
                                        <SignOut />
                                    </>
                                ) : (
                                    isModalOpen() && (
                                        <>
                                            <SignUpModal/>
                                            {'\u00A0'}

                                            <SignInModal show={show} handleClose={handleClose} handleShow={handleShow}/>
                                        </>
                                    ))}
                            </Nav>
                        </Container>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </>
    );
}