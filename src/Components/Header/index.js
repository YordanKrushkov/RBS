import React, { useContext } from 'react';
import { Link,useHistory } from 'react-router-dom'
import { AuthContext } from '../../Context';
import logo from '../../Assets/images/Logo.svg';
import { FiLogOut } from "react-icons/fi";

import './index.scss'
const Header = () => {

    const {isAuthenticated, logout} = useContext(AuthContext);
    const isAuth = isAuthenticated;
    const history=useHistory();
    const onLogout = () => { 
        logout(); 
        history.push('/')
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
                    : <li> <Link to="/login">LOGIN</Link> </li>
                }
            </ul>
        </div>
    )
}

export default Header
