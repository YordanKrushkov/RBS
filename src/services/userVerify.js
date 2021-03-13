import getCookie from './cookies'
const url = 'http://localhost:4000/api/verify';

const userVerify = async (token) => {
    console.log('token', token);
    let promise = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie(token)
        },
    })
    let extra = await promise.json()
    return extra
}
export default userVerify