import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {Navigation} from "./shared/Navbar";
import {ScholarshipSubmission} from "./Scholarship-Submission";
import {ScholarshipApproval} from "./Scholarship-Approval";
import {Header} from "./Header";
import  {UserHome} from "./UserHome";
import "./style.css"
import {CreateAccount} from "./Create-Account";
import {UserLogin} from "./UserLogin";
import {Footer} from "./shared/Footer";
import {Search} from "./search/Search";
import {TopScholarship} from './Top-Scholarship'

import {Provider} from "react-redux";
import {CategorySearch} from "./search/CategorySearch";


export const App = (store) => (
    <>
        <Provider store={store} >
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/category/:categoryName'} component={CategorySearch} categoryName = ":categoryName"/>
                <Route exact path='/scholarshipsubmission' component={ScholarshipSubmission} />
                <Route exact path='/scholarshipapproval' component={ScholarshipApproval} />
                <Route exact path='/userhome' component={UserHome} />
                <Route exact path='/create-account' component={CreateAccount} />
                <Route exact path='/search' component={Search} />
                <Route exact path='/topscholarship' component={TopScholarship} />
                <Route component={FourOhFour} />
            </Switch>
            <Footer/>
        </BrowserRouter>
        </Provider>
    </>

)
