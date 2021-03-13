import React, { useContext } from 'react';
import './index.scss'
import { Link } from 'react-router-dom'
import {AuthContext} from '../../Context';
import logo from '../../Assets/images/Logo.svg'
const Header = () => {
    // const context = useContext(UserContext)
    // const onLogout = () => { context.logOut(); }
    const context=useContext(AuthContext);
    const isAuth=context.isAuthenticated;
    const logout=context.logout;
    return (
        <div className="navigation">
            <Link to="/"><img className="logo" src={logo} alt="this is the logo"/></Link>
            <ul className="navUl">
            {isAuth&&<li><Link to="/post">Post</Link></li>}
            <li><Link to="/rent">Rent</Link></li>
            <li><Link to="/sell">Buy</Link></li>
            {isAuth?<li onClick={logout}><Link to="/logout">LOGOUT</Link> </li>:<li> <Link to="/login">LOGIN</Link> </li>}
            </ul>
        </div>
    )
}

export default Header
