import React, { Fragment, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../../Context';
import { ActionContext } from '../../../Context/actionContext';
import './index.scss';
const MobileNavigation = ({mobile}) => {

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
        <div className={mobile? "mobileNavigaton clickedNav": "mobileNavigaton"}>
            <ul>
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

export default MobileNavigation