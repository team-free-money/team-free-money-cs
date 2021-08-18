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
import "./syle.css"
import {CreateAccount} from "./Create-Account";
import {UserLogin} from "./UserLogin";
import {Footer} from "./Footer";


import {PostCard} from "./PostCard";


export const App = () => (
    <>

        <BrowserRouter>
            <Header/>
            <Navigation/>
            <Switch>
<<<<<<< HEAD

=======
<<<<<<< HEAD
                <Route exact path='/' component={Home} />
=======
<<<<<<< HEAD
>>>>>>> 13632c7d1f3344fb60e32af2d26a232cf4bf280a
                <Route exact path='/home' component={Home} />
>>>>>>> 3f4bb0f748015bd53342f533b21217dba8e3ba51
                <Route exact path='/login' component={UserLogin} />
                <Route exact path='/scholarshipsubmission' component={ScholarshipSubmission} />
                <Route exact path='/scholarshipapproval' component={ScholarshipApproval} />
                <Route exact path='/fourohfour' component={FourOhFour} />
                <Route exact path='/userhome' component={UserHome} />
                <Route exact path='/login' component={UserLogin} />
                <Route exact path='/create' component={CreateAccount} />
                <Route exact path='/fourohfour' component={FourOhFour} />
                <Route exact path='/PostCard' component={PostCard} />
                <Route exact path='/' component={Home} />
                <Route exact path='/search' component={Search} />
                <Route exact path='/fourohfour' component={FourOhFour} />

                <Route component={FourOhFour} />

            </Switch>
            <Footer/>
        </BrowserRouter>
    </>
)