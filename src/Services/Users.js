import getCookie from './cookies';
import { getuser, verify } from './API';

//Get User
const getUser = async () => {

    let promise = await fetch(getuser, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token'),
        },
    })
    let res = await promise.json();
    return res;
};

//Verify User
const userVerify = async () => {
    let promise = await fetch(verify, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token')
        },
    })
    let res = await promise.json();
    return res;
};

export {
    getUser,
    userVerify
}