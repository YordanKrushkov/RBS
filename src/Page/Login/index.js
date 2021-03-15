import React, { useState, useContext } from 'react';
import  './index.scss'
import { Link, useHistory } from 'react-router-dom'
import {AuthContext} from '../../Context';
import authenticate from '../../Services/auth'
// import notify from '../../utils/notification'
const url = 'http://localhost:4000/api/login'

const Login = () => {
    const [user, getUser] = useState({
        email: '',
        password: '',
    })
    const context = useContext(AuthContext);
    const history = useHistory();
    const chnageHendler = (e) => {
        getUser({
            ...user,
            [e.target.id]: e.target.value
        })        
    };
  
    const submitHandler = async (e) => {
        e.preventDefault();
        const { email, password } = user;
        await authenticate(url, {
            email, password
        }, (user) => {
            const {email,properties,likedProperties}=user
            context.login(email, properties, likedProperties);
            localStorage.setItem("user", user.email);
            history.push('/');
        }, (err) => {
            console.log('wrong password or email:',err);
            document.getElementById('wrong').style.display='block'
            history.push('/login')
        })
    };
    return (
        <div className="loginContainer">
            <h1 >Sign in</h1>
            <p >Sign in to save your favourite properties, searches, house prices and more.</p>
            <form action="" className="loginForm" onSubmit={ submitHandler }>
                <label htmlFor="email">Email</label>
                <input type="email" name="" id="email"  onChange={ chnageHendler } />
                <label htmlFor="password">Password</label>
                <input type="password" name="" id="password"  onChange={ chnageHendler } />
                <button>Login</button>
            </form>
            <a href="/forgot" id="forgot" >Forgot your password?</a>
            <div className='redirecRegister'>
                <div > <p>You don't have an accout yet? </p>
                    <Link to="/register" id="join">Join us now</Link>
                </div>
                <p id="wrong">Wrong email or password! Please, try again!</p>
            </div>
        </div>
    )
}
export default Login