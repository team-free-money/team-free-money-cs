import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
<<<<<<< HEAD
import {Navigation} from './Navbar'
=======
import {ScholarshipSubmission} from "./Scholarship-Submission";
>>>>>>> scholarship-submission

export const App = () => (
    <>

        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/scholarshipsubmission' component={ScholarshipSubmission} />
                <Route exact path='/fourohfour' component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)