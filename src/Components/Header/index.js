import { Fragment, useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../Context';
import { ActionContext } from '../../Context/actionContext';
import MobileNavigation from './MobileNavigation';
import logo from '../../Assets/images/Logo.svg';
import { IoMenu } from "react-icons/io5";
import './index.scss';

const Header = () => {

    const [mobile, setMobile] = useState(false);
    const { isAuthenticated, logout } = useContext(AuthContext);
    const { notify } = useContext(ActionContext);
    const isAuth = isAuthenticated;
    const history = useHistory();
    const onLogout = () => {
        logout();
        history.push('/');
        notify(true, 'Goodbye');
    };
    const clickHandler = () => {
        mobile ? setMobile(false) : setMobile(true);
    };

    return (
        <div className="navigation">
            <IoMenu className="mobileMenuButton" onClick={ clickHandler } />
            <Link to="/"><img className="logo" src={ logo } alt="this is the logo" onClick={ () => setMobile(false) } /></Link>
            <MobileNavigation mobile={ mobile } setMobile={ setMobile } />
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
