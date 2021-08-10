import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {ScholarshipApproval} from "./Scholarship-Approval";

export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/scholarshipapproval' component={ScholarshipApproval} />
                <Route exact path='/fourohfour' component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)