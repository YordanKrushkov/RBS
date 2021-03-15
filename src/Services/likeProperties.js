import {likePriperties} from './API'
import getCookie from './cookies'

const likePropertie=(key,id)=>{
    console.log(key, id);
    fetch(likePriperties,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token'),
            [key]:id
        },
       }).then(()=>{}).catch(err=>console.log(err))
}
export default likePropertie