import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss'
import Filter from "../../Components/FilterBar";
import { searchProperty, getSome } from '../../Services/propertiesServices'
import CardElement from '../../Components/Cards'


const Properties = (prop) => {
    const [properties, takeProperties] = useState()
    const [loading, setLoading] = useState(true);
    let offer = prop.location.pathname.split('/')[1].toUpperCase();
    let data=prop.location.state;
    const [filter, setFilter] = useState({
        offer: offer,
        city: '',
        type: '',
        bedrooms: '',
        minPrice: '',
        maxPrice: '',
        sort: ''
    })
    const history=useHistory()
    useEffect(() => {
        if (data) {
            setFilter({
                ...data
            });
        } else {
            setFilter({
                ...filter,
                offer: offer,
            })
        }
    }, [prop.location])

    useEffect(() => {
        if (data) {
            searchProperty(filter).then(res => {
                takeProperties(res);
                setLoading(false);
            })
                .catch(err => console.log("error", err))
        } else {
            getSome(filter).then(res => {
                takeProperties(res);
                setLoading(false);
            })
            .catch(err => console.log("error", err))
        }
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
            <Filter ChangeHandler={ChangeHandler} offer={offer}/>
            <main>
                { properties && properties.map(x => <CardElement loading={ loading } data={ x } key={ x._id } />) }
            </main>
        </div>
    );
}

export default Properties;