import {useState,useEffect} from 'react';
import Filter from "../../Components/filterBar";
import CardElement from '../../Components/cards'
const Properties = (prop) => {
    let offer=prop.location.pathname.split('/')[1].toUpperCase()
    const [filter, setFilter]=useState({
        city:'',
        type:'',
        bedrooms:'',
        minPrice:'',
        maxPrice:'',
        sort:''
    })   
    const [data, setData]=useState('');

    useEffect(()=>{
    })

    const ChangeHandler=(e)=>{
        setFilter({
            [e.target.id]:e.target.value
        })
    }
    return ( 
        <div id="propertiesContainer">
        <Filter>{{ChangeHandler,offer}}</Filter>

        </div>
     );
}
 
export default Properties;