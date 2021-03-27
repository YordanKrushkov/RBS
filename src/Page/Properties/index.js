import { useState, useEffect } from 'react';
import Filter from "../../Components/FilterBar";
import CardElement from '../../Components/Cards';
import { searchProperty, getSome } from '../../Services/propertiesServices';
import { FaHouseDamage } from "react-icons/fa";
import './index.scss';

const Properties = (prop) => {
    const [properties, takeProperties] = useState();
    const [loading, setLoading] = useState(true);
    let offer = prop.location.pathname.split('/')[1].toUpperCase();
    let data = prop.location.state;
    const [filter, setFilter] = useState({
        offer: offer,
        city: '',
        type: '',
        bedrooms: '',
        minPrice: '',
        maxPrice: '',
        sortBy: 'newest'
    });
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
    }, [prop.location]);

    useEffect(() => {
        if (data) {
            searchProperty(filter)
                .then(res => {
                    takeProperties(res);
                    setLoading(false);
                })
                .catch(err => console.log("error", err));
        } else {
            getSome(filter)
                .then(res => {
                    takeProperties(res);
                    setLoading(false);
                })
                .catch(err => console.log("error", err));
        }
    }, [filter]);
    const ChangeHandler = (e) => {
        setFilter({
            ...filter,
            offer: offer,
            [e.target.id]: e.target.value
        });
    };

    return (
        <div id="propertiesContainer">
            <Filter ChangeHandler={ ChangeHandler } offer={ offer } />
            <main>
                { properties && properties.map(x => <CardElement loading={ loading } data={ x } key={ x._id } />) }
                { properties && properties.length === 0 &&
                    <div id="emptyHouse">
                        <h1>No properties available at the moment...</h1>
                        <FaHouseDamage />
                    </div>
                }
            </main>
        </div>
    );
}

export default Properties;