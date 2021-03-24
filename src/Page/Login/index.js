import { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../Context';
import authenticate from '../../Services/auth'
import { loginURL } from '../../Services/API'
import {hideError} from '../../Utils/formsValidator'
import { ActionContext } from '../../Context/actionContext'
import './index.scss'

const Login = () => {
    const [error, setErr] = useState({
        err:'',
        input:''
    });
    const {login} = useContext(AuthContext);
    const history = useHistory();
    const { notify } = useContext(ActionContext)

    const submitHandler = async (e) => {
        e.preventDefault();
        const user = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        await authenticate(loginURL, user, (user) => {
            login(user);
            localStorage.setItem("user", user.email);
            notify(true,`Welcome, ${user.name} ${user.surname}`);
            history.push('/');
        }, (err) => {
            setErr({err:true});
            notify(true,`Sorry, please try again!`);
            history.push('/login')
        })
    };

     hideError(error.err,setErr)


    return (
        <div className="loginContainer">
            <h1 >Sign in</h1>
            {error.err
                ? <p id="wrongLogin">Wrong email or password! Please, try again!</p>
                : <p >Sign in for your favourite properties and more.</p> 
            }
            <form action="" className="loginForm" onSubmit={ submitHandler }>
                <label htmlFor="email">Email</label>
                <input className={ error.err ? "errors":'' } type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input className={ error.err ? "errors":'' } type="password" name="password" id="password" />
                <button>Login</button>
            </form>
            <a href="/forgot" id="forgot" >Forgot your password?</a>
            <div className='redirecRegister'>
                <div > <p>You don't have an accout yet? </p>
                    <Link to="/register" id="join">Join us now</Link>
                </div>
            </div>
        </div>
    )
};

export default Login