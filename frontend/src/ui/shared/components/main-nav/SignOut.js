import React from 'react'
import {useDispatch} from 'react-redux'
import { getAuth } from '../../../../store/auth'
import {httpConfig} from "../../../../utils/httpConfig";
import {Button} from "react-bootstrap";


export const SignOut = () => {
    const dispatch = useDispatch()
    const signOut = () => {
        httpConfig.get('/apis/sign-out/').then(reply => {

            if (reply.status === 200) {
                window.localStorage.removeItem('authorization')
                dispatch(getAuth(null))
                window.location = '/'

            }
        })
    }

    return(
        <>
            <div>
                <Button variant="primary" className="btn btn-outline-dark mx-2"  onClick={signOut}>
                    Sign Out
                </Button>
            </div>
        </>
    )
}
