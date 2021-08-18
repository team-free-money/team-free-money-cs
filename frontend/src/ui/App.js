import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {Search} from './Search'
>>>>>>> 04ec9616c80ee99b08d1a5ed2d44d440f08ddf72
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

<<<<<<< HEAD
=======
=======
import {TopScholarship} from './Top-Scholarship'
>>>>>>> Top-Scholarship
>>>>>>> 04ec9616c80ee99b08d1a5ed2d44d440f08ddf72

export const App = () => (
    <>

        <BrowserRouter>
            <Header/>
            <Navigation/>
            <Switch>
<<<<<<< HEAD
                <Route exact path='/' component={Home} />
=======




                <Route exact path='/' component={Home} />
<<<<<<< HEAD

>>>>>>> 04ec9616c80ee99b08d1a5ed2d44d440f08ddf72
                <Route exact path='/home' component={Home} />
                <Route exact path='/login' component={UserLogin} />
                <Route exact path='/scholarshipsubmission' component={ScholarshipSubmission} />
                <Route exact path='/scholarshipapproval' component={ScholarshipApproval} />
                <Route exact path='/fourohfour' component={FourOhFour} />
                <Route exact path='/userhome' component={UserHome} />
                <Route exact path='/login' component={UserLogin} />
                <Route exact path='/create-account' component={CreateAccount} />
                <Route exact path='/fourohfour' component={FourOhFour} />
                <Route exact path='/PostCard' component={PostCard} />
                <Route exact path='/' component={Home} />
                <Route exact path='/search' component={Search} />
                <Route exact path='/fourohfour' component={FourOhFour} />

                <Route component={FourOhFour} />
<<<<<<< HEAD
=======

=======
                <Route exact path='/topscholarship' component={TopScholarship} />
                <Route exact path='/fourohfour' component={FourOhFour} />
>>>>>>> Top-Scholarship
>>>>>>> 04ec9616c80ee99b08d1a5ed2d44d440f08ddf72
            </Switch>
            <Footer/>
        </BrowserRouter>
    </>

)
