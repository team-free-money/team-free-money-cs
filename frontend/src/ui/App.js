import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import  {UserHome} from "./UserHome";
import "./syle.css"

export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/userhome' component={UserHome} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)