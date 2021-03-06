import React from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import {SignInFormContent} from "./SignInFormContent";
import {useDispatch} from "react-redux";
import * as jwtDecode from 'jwt-decode'
import { getAuth } from '../../../../../store/auth'
import {httpConfig} from "../../../../../utils/httpConfig";
import {useHistory} from "react-router";

export const SignInForm = () => {
const history = useHistory()
    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        userName: Yup.string()
            .required('username must be at least 8 characters'),
        userEmail: Yup.string()
            .email("email must be a valid email")
            .required('email is required'),
        userPassword: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least eight characters")
    });


    //the initial values object defines what the request payload is.
    const signIn = {
        userEmail: "",
        userPassword: ""
    };

    const submitSignIn = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/sign-in/", values)
            .then(reply => {
                let {message, type} = reply;
                setStatus({message, type});
                if(reply.status === 200 && reply.headers["authorization"]) {
                    window.localStorage.removeItem("authorization");
                    window.localStorage.setItem("authorization", reply.headers["authorization"]);
                    resetForm();
                    let jwtToken = jwtDecode(reply.headers["authorization"])
                    console.log(jwtToken);
                    dispatch(getAuth(jwtToken))

                   history.push("/userhome")
                }
                setStatus({message, type});
            });
    };

    return (
        <>
            <Formik
                initialValues={signIn}
                onSubmit={submitSignIn}
                validationSchema={validator}
            >
                {SignInFormContent}
            </Formik>
        </>
    )
};