import { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Loader from '../../Components/Loader';
import RegisterInput from '../../Components/RegisterComponent';
import { AuthContext } from '../../Context';
import { ActionContext } from '../../Context/actionContext';
import authenticate from '../../Services/auth';
import { registerURL } from '../../Services/API';
import { verifyRegister, hideError } from '../../Utils/formsValidator';
import './index.scss';

const Register = () => {
    const [error, setErr] = useState({
        err: '',
        input: '',
    });
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);
    const history = useHistory();
    const { notify } = useContext(ActionContext);

    useEffect(() => {
        if (error.err) {
            setTimeout(() => {
                setLoading(false)
            }, 500)
        }
    }, [error]);

    const submitHandler = async (e) => {
        e.preventDefault();
        const user = {
            email: e.target.email.value.trim(),
            name: e.target.name.value.trim(),
            surname: e.target.surname.value.trim(),
            password: e.target.password.value.trim(),
            repassword: e.target.repasword.value.trim(),
        };
        verifyRegister(user, setErr);
        setLoading(true);

        if (!error.err) {
            await authenticate(registerURL, user,
                (user) => {
                    if (!user) {
                        setErr({ err: 'Something went wrong, please try again!' });
                        notify(true, `Sorry, please try again!`);
                        setLoading(false)
                    }
                    login(user);
                    localStorage.setItem("user", user.email);
                    notify(true, `Welcome, ${user.name} ${user.surname}`);
                    setLoading(false)
                    history.push('/');
                }, (e) => {
                    console.log(e);
                    notify(true, `Sorry, please try again!`);
                    history.push('/register');
                    setLoading(false);
                })
        }
    };

    hideError(error.err, setErr);

    return (
        <div className="registerContainer">
            {loading && <Loader id="loginLoader" /> }
            <h1>Register</h1>
            {error.err
                ? <p className="wrong">{ error.err }</p>
                : <p>Sign in for your favourite properties and more.</p>
            }
            <form action="" onSubmit={ submitHandler }>
                <div id="regformWrapper">
                    <div id="regInputsWrapper">
                        <RegisterInput type="text" name="email" label="Email" error={ error } />
                        <div id="regName">
                            <RegisterInput type="text" name="name" label="Name" error={ error } />
                            <RegisterInput type="text" name="surname" label="Surname" error={ error } />
                        </div>
                        <div id="regName">
                            <RegisterInput type="password" name="password" label="Password" error={ error } />
                            <RegisterInput type="password" name="repasword" label="Re-Password" error={ error } />
                        </div>
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