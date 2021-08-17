import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
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

export const App = () => (
    <>

        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route exact path='/header' component={Header} />
                <Route exact path='/' component={Home} />
<<<<<<< HEAD
<<<<<<< HEAD
                <Route exact path='/scholarshipsubmission' component={ScholarshipSubmission} />
=======
                <Route exact path='/scholarshipapproval' component={ScholarshipApproval} />
>>>>>>> scholarship-approval
                <Route exact path='/fourohfour' component={FourOhFour} />
=======
                <Route exact path='/userhome' component={UserHome} />
                <Route component={FourOhFour} />
>>>>>>> home
            </Switch>
        </BrowserRouter>

    </>
)