import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
<<<<<<< HEAD
<<<<<<< HEAD
import {UserLogin} from "./Login";
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {Navigation} from './Navbar'
=======
import {ScholarshipSubmission} from "./Scholarship-Submission";
>>>>>>> scholarship-submission
=======
import {ScholarshipApproval} from "./Scholarship-Approval";
>>>>>>> scholarship-approval
=======
import {Header} from "./Header";

>>>>>>> header
=======
import  {UserHome} from "./UserHome";
import "./syle.css"
>>>>>>> home
>>>>>>> b75ecaded2a636763c18d27e6107bad2306c9b25
=======
import {CreateAccount} from "./Create-Account";
>>>>>>> create-account

export const App = () => (
    <>

        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route exact path='/header' component={Header} />
                <Route exact path='/' component={Home} />
<<<<<<< HEAD
<<<<<<< HEAD
                <Route exact path='/login' component={UserLogin} />
=======
<<<<<<< HEAD
<<<<<<< HEAD
                <Route exact path='/scholarshipsubmission' component={ScholarshipSubmission} />
=======
                <Route exact path='/scholarshipapproval' component={ScholarshipApproval} />
>>>>>>> scholarship-approval
                <Route exact path='/fourohfour' component={FourOhFour} />
=======
                <Route exact path='/userhome' component={UserHome} />
>>>>>>> b75ecaded2a636763c18d27e6107bad2306c9b25
                <Route component={FourOhFour} />
>>>>>>> home
=======
                <Route exact path='/create' component={CreateAccount} />
                <Route exact path='/fourohfour' component={FourOhFour} />

>>>>>>> create-account
            </Switch>
        </BrowserRouter>

    </>
)