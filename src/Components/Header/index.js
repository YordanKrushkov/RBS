import React, { Fragment, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../Context';
import logo from '../../Assets/images/Logo.svg';
import { ActionContext } from '../../Context/actionContext'

import './index.scss'
const Header = () => {

    const { isAuthenticated, logout } = useContext(AuthContext);
    const { notify } = useContext(ActionContext);
    const isAuth = isAuthenticated;
    const history = useHistory();
    const onLogout = () => {
        logout();
        history.push('/');
        notify(true, 'Goodbye')
    };

    return (
        <div className="navigation">
            <Link to="/"><img className="logo" src={ logo } alt="this is the logo" /></Link>
            <ul className="navUl">
                { isAuth && <li><Link to="/post">Post</Link></li> }
                { isAuth && <li><Link to="/profile">Profile</Link></li> }
                <li><Link to="/rent">Rent</Link></li>
                <li><Link to="/sale">Buy</Link></li>
                { isAuth
                    ? <li onClick={ onLogout }><Link to="/">Logout</Link> </li>
                    : <Fragment>
                        <li> <Link to="/register">Register</Link> </li>
                        <li> <Link to="/login">LOGIN</Link> </li>
                    </Fragment>
                }
            </ul>
        </div>
    )
}

export default Header
