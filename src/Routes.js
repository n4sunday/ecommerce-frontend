import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './cors/Home'
import PrivateRoute from './auth/PrivateRoute'
import Dashboard from './user/UserDashboard'


const Routes = () => {
    return (
        <BrowserRouter>
            < Switch>
                <Route path='/' exact component={Home} />
                <Route path='/signup' exact component={Signup} />
                <Route path='/signin' exact component={Signin} />
                <PrivateRoute path='/user/dashboard' exact component={Dashboard} />                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes