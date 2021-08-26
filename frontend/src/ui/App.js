import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {Search} from './Search'
import {Navigation} from './Navbar'
import {ScholarshipSubmission} from "./Scholarship-Submission";
import {ScholarshipApproval} from "./Scholarship-Approval";
import {Header} from "./Header";
import  {UserHome} from "./UserHome";
import "./style.css"
import {CreateAccount} from "./Create-Account";
import {UserLogin} from "./UserLogin";
import {Footer} from "./Footer";
import {PostCard} from "./PostCard";
import {TopScholarship} from './Top-Scholarship'


export const App = () => (
    <>

        <BrowserRouter>

            <Navigation/>
            <Switch>
                <Route exact path='/' component={Home} />

                <Route exact path='/home' component={Home} />

                <Route exact path='/login' component={UserLogin} />
                <Route exact path='/scholarshipsubmission' component={ScholarshipSubmission} />
                <Route exact path='/scholarshipapproval' component={ScholarshipApproval} />
                <Route exact path='/userhome' component={UserHome} />
                <Route exact path='/login' component={UserLogin} />
                <Route exact path='/create-account' component={CreateAccount} />
                <Route exact path='/PostCard' component={PostCard} />
                <Route exact path='/' component={Home} />
                <Route exact path='/search' component={Search} />

                <Route exact path='/fourohfour' component={FourOhFour} />
                <Route component={FourOhFour} />
                <Route exact path='/topscholarship' component={TopScholarship} />
                <Route exact path='/fourohfour' component={FourOhFour} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    </>

)
