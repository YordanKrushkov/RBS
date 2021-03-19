import getCookie from './cookies'
const url = 'http://localhost:4000/api/verify';

const userVerify = async () => {
    let promise = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token')
        },
    })
    let extra = await promise.json()
    return extra
}
export default userVerify