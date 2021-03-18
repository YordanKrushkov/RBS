import React, { useState, useContext } from 'react';
import styles from './index.scss'
import { Link, useHistory } from 'react-router-dom'
import {AuthContext} from '../../Context';
import authenticate from '../../Services/auth'
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
        const { name, surname, email, password, repassword } = user
        if (password.length < 6 || password !== repassword) {
            const element= document.getElementById('wrong')
           element.innerHTML='The password does\'t match'
           element.style.display='block'
            return;
        };
        await authenticate(url, {
            name, surname, email, password
        }, (user) => {
            const {email,properties,likedProperties, name,surname}=user
            context.login(email,properties,likedProperties, name,surname);
            localStorage.setItem("user", email);
            history.push('/');
        }, (e) => {
            console.log(e);
            document.getElementById('wrong').style.display='block'
            history.push('/register')
        })
    };
    return (
        <div className="registerContainer">
            <h1>Register</h1>
            <p>Sign in to save your favourite properties, searches, house prices and more.</p>
            <form action="" onSubmit={ submitHandler }>
                <div id="regformWrapper">
                    <div id="regInputsWrapper">
                    <div className="regInputWrapper email">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="" id="email" onChange={ chnageHendler } required />
                        </div>
                    <div id="regName">
                        <div className="regInputWrapper">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="" id="name" onChange={ chnageHendler } required />
                        </div>
                        <div className="regInputWrapper">
                            <label htmlFor="surname">Surname</label>
                            <input type="text" name="" id="surname" onChange={ chnageHendler } required />
                        </div>
                        </div>
                      
                        <div id="regName">
                        <div className="regInputWrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="" id="password" onChange={ chnageHendler } required />
                        </div>

                        <div className="regInputWrapper">
                            <label htmlFor="repassword">Re-Password</label>
                            <input type="password" name="" id="repassword" onChange={ chnageHendler } />
                        </div>
                        </div>
                    </div>
                </div>

                <button>Register</button>
            </form>
            <div id="alreadyReg">
                <div id="regLog" > <p>You have an accout already? </p>
                    <Link to="/login">Login</Link> </div>
            </div>
            <p className={styles.wrong} id="wrong">Something went wrong, please try again!</p>
        </div>
    )

}

export default Register