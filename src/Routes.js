import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './cors/Home'
import PrivateRoute from './auth/PrivateRoute'
import Dashboard from './user/UserDashboard'
import AdminRoute from './auth/AdminRoute'
import AdminDashboard from './user/AdminDashboard'
import AddCategory from './admin/AddCategory'



const Routes = () => {
    return (
        <BrowserRouter>
            < Switch>
                <Route path='/' exact component={Home} />
                <Route path='/signup' exact component={Signup} />
                <Route path='/signin' exact component={Signin} />
                <PrivateRoute path='/user/dashboard' exact component={Dashboard} />                
                <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />                
                <AdminRoute path='/create/category' exact component={AddCategory}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes