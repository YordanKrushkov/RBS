import {deletImg} from './API';
import getCookie from './cookies';

const deleteImages= async(src,id)=>{
       const promise= await fetch(deletImg,{
        method:"POST",
        body:JSON.stringify({src:src,id:id}),
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token'),
        }
    });
    const res=await promise.json();
    return res;
}
export default deleteImages