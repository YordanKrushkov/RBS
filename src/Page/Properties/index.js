import { useState, useEffect } from 'react';
import './index.scss'
import Filter from "../../Components/FilterBar";
import getPropertiesService from '../../Services/getData'
import CardElement from '../../Components/Cards'


const Properties = (prop) => {
    const [properties, takeProperties] = useState()
    let offer = prop.location.pathname.split('/')[1].toUpperCase()

    const [filter, setFilter] = useState({
        offer: offer,
        city: '',
        type: '',
        bedrooms: '',
        minPrice: '',
        maxPrice: '',
        sort: ''
    })
    useEffect(() => {
        setFilter({
            ...filter,
            offer: offer,
        })
    }, [prop.location])
    useEffect(() => {
        getPropertiesService.getSome(filter).then(res => takeProperties(res)).catch(err => console.log("error", err))
    }, [filter])
    const ChangeHandler = (e) => {
        setFilter({
            ...filter,
            offer: offer,
            [e.target.id]: e.target.value
        })
    }
    return (
        <div id="propertiesContainer">
            <Filter>{ { ChangeHandler, offer } }</Filter>
            <main>
            {properties && properties.map(x => <CardElement data={ x } key={ x._id } />) }
            </main>
        </div>
    );
}

export default Properties;