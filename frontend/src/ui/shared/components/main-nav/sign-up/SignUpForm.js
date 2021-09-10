import React from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
import {SignUpFormContent} from "./SignUpFormContent";
import {httpConfig} from "../../../../../utils/httpConfig";

export const SignUpForm = () => {
    const signUp = {
        userName: "",
        userEmail: "",
        userPassword: "",
        userPasswordConfirm: "",
    };

    const validator = Yup.object().shape({
        userName: Yup.string()
            .name("username must be at least 8 characters"),
        userEmail: Yup.string()
            .email("email must be a valid email")
            .required('email is required'),
        userPassword: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least eight characters"),
        userPasswordConfirm: Yup.string()
            .required("Password Confirm is required")
            .min(8, "Password must be at least eight characters")
    });

    const submitSignUp = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/sign-up/", values)
            .then(reply => {
                    let {message, type} = reply;

                    if(reply.status === 200) {
                        resetForm();
                    }
                    setStatus({message, type});
                }
            );
    };


    return (

        <Formik
            initialValues={signUp}
            onSubmit={submitSignUp}
            validationSchema={validator}
        >
            {SignUpFormContent}
        </Formik>

    )
};
