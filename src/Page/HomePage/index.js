import {useState,useEffect, Fragment} from 'react'
import './index.scss'
import pic from '../../Assets/images/key.jpg'
import {getData} from '../../Services/propertiesServices'
import CardElement from '../../Components/Cards'
import Search from '../../Components/SearchForm'
// import notification from '../../components/notifications'
// import notify from '../../utils/notification'
const Body = (props) => {
    // const message = props.location.state
    // if (message) {
    //     notify('notification')
    // }
    const [properties, setProperties]=useState([]) 
    useEffect(()=>{
        getData().then(x=>setProperties(x))
        .catch(err=>console.log("error",err))
    },[])
    return (
        <Fragment>
        <div className="homeContainer" style={{backgroundImage:`url(${pic})`}}>
            {/* {message ? notification(message) : null } */}
            <div className="homeTitle">
                {/* <h1>
                    Find your new home
            </h1> */}
            </div>
            <Search />
        </div>
        <div className="cardContainer">
            {properties? properties.map(x=><CardElement data={x} key={x._id}/>):null}
            </div>
        </Fragment>
    )
}
export default Body