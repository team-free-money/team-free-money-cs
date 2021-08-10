import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {ScholarshipSubmission} from "./Scholarship-Submission";

export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/scholarshipsubmission' component={ScholarshipSubmission} />
                <Route exact path='/fourohfour' component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)