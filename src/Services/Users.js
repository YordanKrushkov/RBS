import getCookie from './cookies'
import {getuser} from './API'

const getUser = async () => {

    let promise = await fetch(getuser, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token'),
        },
    })
    let extra = await promise.json()
    return extra
};

export {
    getUser,
}