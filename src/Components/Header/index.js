import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context';
import logo from '../../Assets/images/Logo.svg'
import './index.scss'
const Header = () => {

    const {isAuthenticated, logout} = useContext(AuthContext);
    const isAuth = isAuthenticated;
    const onLogout = () => { 
        logout(); 
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
                    ? <li onClick={ onLogout }><Link to="/">LOGOUT</Link> </li>
                    : <li> <Link to="/login">LOGIN</Link> </li>
                }
            </ul>
        </div>
    )
}

export default Header
