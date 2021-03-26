import './index.scss';

const RegisterInput = ({ type, name, label, error }) => {
    let err = false;
    if (name === "repasword" && error.input === "password") {
        err = true;
    };

    return (
        <div data-testid="register" className={ name === 'email' ? 'regInputWrapper email' : "regInputWrapper" }>
            <label htmlFor={ name }>{ label }</label>
            <input className={ error.input === name || err ? 'errors' : '' } type={ type } name={ name } id={ name } />
        </div>

    );
};

export default RegisterInput;