import React, { useState, useContext } from 'react';
import styles from './index.scss'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../Context';
import authenticate from '../../Services/auth'
import {verifyRegister} from '../../Utils/verifyData'
// import notify from '../../utils/notification'
const url = 'http://localhost:4000/api/register'

const Register = () => {

    const [user, getUser] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        repassword: '',
    })
    const context = useContext(AuthContext);
    const history = useHistory();
    const chnageHendler = (e) => {
        getUser({
            ...user,
            [e.target.id]: e.target.value
        });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        verifyRegister(user);
        const { name, surname, email, password} = user
        await authenticate(url, {
            name, surname, email, password
        }, (user) => {
            const { email, properties, likedProperties, name, surname } = user
            context.login(email, properties, likedProperties, name, surname);
            localStorage.setItem("user", email);
            history.push('/');
        }, (e) => {
            console.log(e);
            history.push('/register')
        })
    };
    return (
        <div className="registerContainer">
            <h1>Register</h1>
            <p>Sign in for your favourite properties and more.</p>
            <form action="" onSubmit={ submitHandler }>
                <div id="regformWrapper">
                    <div id="regInputsWrapper">
                        <div className="regInputWrapper email">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="" id="email" onChange={ chnageHendler } />
                        </div>
                        <div id="regName">
                            <div className="regInputWrapper">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="" id="name" onChange={ chnageHendler } />
                            </div>
                            <div className="regInputWrapper">
                                <label htmlFor="surname">Surname</label>
                                <input type="text" name="" id="surname" onChange={ chnageHendler } />
                            </div>
                        </div>

                        <div id="regName">
                            <div className="regInputWrapper">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="" id="password" onChange={ chnageHendler } />
                            </div>

                            <div className="regInputWrapper">
                                <label htmlFor="repassword">Re-Password</label>
                                <input type="password" name="" id="repassword" onChange={ chnageHendler } />
                            </div>
                        </div>
                        <p id="wrong"></p>
                    </div>
                </div>

                <button>Register</button>
            </form>
            <div id="alreadyReg">
                <div id="regLog" > <p>You have an accout already? </p>
                    <Link to="/login">Login</Link> </div>
            </div>
        </div>
    )

}

export default Register