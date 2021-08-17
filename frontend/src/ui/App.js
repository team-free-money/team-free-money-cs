import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {Navigation} from './Navbar'
import {ScholarshipSubmission} from "./Scholarship-Submission";
import {ScholarshipApproval} from "./Scholarship-Approval";
import {Header} from "./Header";
import  {UserHome} from "./UserHome";
import "./syle.css"
import {CreateAccount} from "./Create-Account";
import {UserLogin} from "./UserLogin";
import {Footer} from "./Footer";



export const App = () => (
    <>

        <BrowserRouter>
            <Header/>
            <Navigation/>
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/login' component={UserLogin} />
                <Route exact path='/scholarshipsubmission' component={ScholarshipSubmission} />
                <Route exact path='/scholarshipapproval' component={ScholarshipApproval} />
                <Route exact path='/fourohfour' component={FourOhFour} />
                <Route exact path='/userhome' component={UserHome} />
                <Route exact path='/login' component={UserLogin} />
                <Route exact path='/create' component={CreateAccount} />
                <Route exact path='/fourohfour' component={FourOhFour} />
            </Switch>
            <Footer/>
        </BrowserRouter>

    </>
)