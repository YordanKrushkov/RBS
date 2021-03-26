import React, { Fragment, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../../Context';
import { ActionContext } from '../../../Context/actionContext';
import './index.scss';
const MobileNavigation = ({ mobile, setMobile }) => {

    const { isAuthenticated, logout } = useContext(AuthContext);
    const { notify } = useContext(ActionContext);
    const isAuth = isAuthenticated;
    const history = useHistory();
    const onLogout = () => {
        logout();
        history.push('/');
        notify(true, 'Goodbye');
    };

    return (
        <div className={ mobile ? "mobileNavigaton clickedNav" : "mobileNavigaton" }>
            <ul>
                { isAuth && <li><Link to="/post" onClick={ () => setMobile(false) }>Post</Link></li> }
                { isAuth && <li><Link to="/profile" onClick={ () => setMobile(false) }>Profile</Link></li> }
                <li><Link ata-testid="mobileNavigation" to="/rent" onClick={ () => setMobile(false) }>Rent</Link></li>
                <li><Link to="/sale" onClick={ () => setMobile(false) }>Buy</Link></li>
                { isAuth
                    ? <li onClick={ onLogout }><Link to="/" onClick={ () => setMobile(false) }>Logout</Link> </li>
                    : <Fragment>
                        <li> <Link to="/register" onClick={ () => setMobile(false) }>Register</Link> </li>
                        <li> <Link to="/login" onClick={ () => setMobile(false) }>LOGIN</Link> </li>
                    </Fragment>
                }
            </ul>
        </div>
    )
}

export default MobileNavigation