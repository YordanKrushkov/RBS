import getCookie from './cookies'
const url = 'http://localhost:4000/api/getuser';

const getUser = async () => {

    let promise = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token'),
        },
    })
    let extra = await promise.json()
    return extra
}
export default getUser