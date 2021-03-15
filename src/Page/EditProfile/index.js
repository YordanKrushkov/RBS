import {useState, useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import UserContext from '../../Context'
import {getUser} from '../../Services/Users'
import './index.scss'
import img from '../../Assets/images/profile.png'
const Edit = (loged) => {
    const [user,setUser]=useState({})
    const [properties, getData] = useState({
        profilePicture:'',
        firstName:'',
        lastName:'',
        phone:'',
        location:'',
    })

    useEffect(() => {
        getUser().then(res=>setUser(res)).catch(err=>console.log(err))
    }, [])
    const context=useContext(UserContext)
    const history=useHistory()
    const onChangeHandler = (e) => {

        setUser({
            ...user,
            [e.target.id]: e.target.value,
        });
        console.log(user);
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(user);
        // let promise = await fetch('https://properties-3e020-default-rtdb.firebaseio.com/users.json', {
        //     method: 'POST',
        //     body: JSON.stringify(properties)
        // })
        // let data = await promise.json();
        // history.push('/');
        // return data;
    };





    return (
        <form className="editForm" onSubmit={submitHandler}>
        <h4 >Update your profile</h4>
        <div>
         <img src={img} alt="ProfilePicture"/>
        </div>
         <input type="file" style={{display:'none'}}/>
            <section>
                <label htmlFor='firstName'>First Name</label>
                <input placeholder={user.name} type='text' id='name' onChange={onChangeHandler} />
            </section>
            <section>
                <label htmlFor='lastName'>Second Name</label>
                <input placeholder={user.surname} type='text' id='surname' onChange={onChangeHandler} />
            </section>
            <section>
            <label htmlFor='phone'>Phone</label>
            <input placeholder={user.phone||"099999999"} type='text' id='phone' onChange={onChangeHandler} />
            </section>
            <section>
            <label htmlFor='location'>Location</label>
            <input placeholder={user.location|| "London, UK"} type='text' id='location' onChange={onChangeHandler} />
            </section>
            <button> Submit</button>
        </form>
    )
}
export default Edit