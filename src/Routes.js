import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './cors/Home'
import Menu from './cors/Menu'


const Routes = () => {
    return (
        <BrowserRouter>
            <Menu/>
            < Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes