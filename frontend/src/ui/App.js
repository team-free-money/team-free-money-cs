import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {CreateAccount} from "./Create-Account";

export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/create' component={CreateAccount} />
                <Route exact path='/fourohfour' component={FourOhFour} />

            </Switch>
        </BrowserRouter>

    </>
)