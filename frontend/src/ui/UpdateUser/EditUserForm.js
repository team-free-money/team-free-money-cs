import React from "react"
import * as Yup from "yup";
import {httpConfig} from "../../utils/httpConfig";
import { Formik } from "formik";
import {EditUserFormContent} from "./EditUserFormContent";


export const EditUserForm = (props) => {
    const {user} = props

    const validationObject = Yup.object().shape({
        userEmail: Yup.string()
            .email("email must be a valid email"),
        userName: Yup.string()
            .min(5, "User Name is too long")
    });

    function submitEditedUser (values, {resetForm, setStatus}) {

        const submitUpdatedUser = (updatedUser) => {
            httpConfig.put(`/apis/profile/${user.UserId}`, updatedUser)
                .then(reply => {
                    let {message, type} = reply;

                    if (reply.status === 200) {
                        resetForm();
                    }
                    setStatus({message, type});
                    return (reply)
                })
        };


        submitUpdatedUser(values);


    }
    return (
        <Formik
            initialValues={user}
            onSubmit={submitEditedUser}
            validationSchema={validationObject}
        >
            {EditUserFormContent}
        </Formik>
    )

};