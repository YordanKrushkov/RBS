import getCookie from './cookies'
import {updateProperty} from './API'
const UpdateProfile=async(prop)=>{
 const property= await fetch(updateProperty, {
        method:"POST",
        body:JSON.stringify(prop),
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token'),
        }
    })
  const result = await property.json()
  return result
}
export default UpdateProfile