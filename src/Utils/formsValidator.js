//Verify Submited Property
const verifySubmit = (propertie, img, setErr) => {
    const { city, street, type, bedrooms, bathroom, price } = propertie;
    if (!city) {
        setErr({
            err: 'Please, select city!',
            input: "city"
        });
        return;
    }
    if (!street) {
        setErr({
            err: 'Please, fill the address!',
            input: "street"
        });
        return;
    }
    if (!type) {
        setErr({
            err: 'Please, select type!',
            input: "type"
        });
        return;
    }
    if (!bedrooms) {
        setErr({
            err: 'Please, select bedrooms!',
            input: "bedrooms"
        });
        return;
    }
    if (!bathroom) {
        setErr({
            err: 'Please, select bathrooms!',
            input: "bathroom"
        });
        return;
    }
    if (!price) {
        setErr({
            err: 'Please, select price!',
            input: "price"
        });
        return;
    }
    if (img.length === 0) {
        setErr({
            err: 'It must have at least one picture!',
            input: 'imageButton'
        });
        return
    }
};

//Verify Register
const verifyRegister = (user, setErr) => {
    const { name, surname, email, password, repassword } = user;
    if (!email) {
        setErr({
            err: 'Please, insert your email!',
            input: 'email'
        });
        return;
    };
    if (!name) {
        setErr({
            err: 'Please, insert your name!',
            input: 'name'
        });
        return;
    };
    if (!surname) {
        setErr({
            err: 'Please, insert your surname!',
            input: 'surname'
        });
        return;
    };

    if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)) {
        setErr({
            err: 'Please, insert a valid email!',
            input: 'email'
        });
        return;
    };

    if (password !== repassword) {
        setErr({
            err: 'The password does\'t match!',
            input: 'password',
        });
        return;
    } else if (password.length < 6) {
        setErr({
            err: 'The password must be at least 6 characters!',
            input: 'password'
        });
        return;
    };
};

//Hide Error
const hideError = (state, setState,) => {
    if (state) {
        setTimeout(() => {
            setState({err:'',input:''})
        }, 2000)
    }
};

export {
    verifyRegister,
    verifySubmit,
    hideError
}