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

const updateUser=async(body)=>{
  const  promise = await fetch('', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export {
    getUser,
}