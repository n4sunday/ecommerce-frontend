import React, {Fragment} from 'react'
import { Link, withRouter } from 'react-router-dom'
import { signout, isAuthenticated } from '../auth'


const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: '#ff9900' }
    } else {
        return { color: '#fff' }
    }
}


const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link className="nav-link" to="/" style={isActive(history, "/")} >Home</Link>
            </li>

            {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signin" style={isActive(history, "/signin")} >Signin</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup" style={isActive(history, "/signup")} >Signup</Link>
                    </li>
                </Fragment>
            )}

            {isAuthenticated() && (
                <li className="nav-item">
                    <span className="nav-link"
                        onClick={() => signout(() => {
                            history.push('/')
                        })}
                        style={{ cursor: 'pointer', color: '#fff' }}
                    >Signout</span>
                </li>
            )}


        </ul>
    </div>
)

export default withRouter(Menu)