import getCookie from './cookies'
import {deleteAPI} from './API';
const deletePropertie= async(id)=>{
        const promise = await fetch(deleteAPI,  {
            method:'POST',
            body:JSON.stringify({id:id}),
            headers: {
            'Authorization': getCookie('x-auth-token'),
            'Content-Type': 'application/json',
        }});
        const res=promise.json()
        return res;
    }

export default deletePropertie