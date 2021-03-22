import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './index.scss'
import AllCities from '../FormElements/Cities'
import RentingPrice from '../FormElements/Price/RentingPrice'
import SellingPrice from '../FormElements/Price/SellingPrice'
import TypeSelect from '../FormElements/Properties/Type'
import BedroomCount from '../FormElements/Properties/Bedrooms'
import { switchMenu } from '../../Utils/eventHandlers'

const Search = () => {
    const [offer, changeOffer] = useState('RENT');
    const [search, changeSearch] = useState({ offer: offer })
    const history = useHistory()
    const changeHandler = (e) => {
        changeSearch({
            ...search,
            [e.target.id]: e.target.value,
            offer: offer,
        })
    }
    useEffect(() => {
        changeSearch({
            ...search,
            offer: offer
        })
    }, [offer])
    const searchIt = (e) => {
        e.preventDefault()
        history.push({
            pathname: '/properties',
            search: `?offer=${search.offer}&city=${search.city}&type=${search.type}&bedrooms=${search.bedrooms}&minPrice=${search.minPrice}&maxPrice=${search.maxPrice}`,
            state: search
        })

    }
    return (
        <form action="" onSubmit={ searchIt }>
            <div className="formWrapper">
                <header>
                    <ul>
                        <li onClick={ (e) => { switchMenu(e, changeOffer) } } value='RENT' style={ { borderTopLeftRadius: 10 } } className="new" >RENT</li>
                        <li onClick={ (e) => { switchMenu(e, changeOffer) } } value='SELL' style={ { borderTopRightRadius: 10 } }>SALE</li>
                    </ul>
                </header>
                <main className="searchFormBody">
                    <h4>Search for Property </h4>
                    <div className="imputs" >
                        <label htmlFor="city">City</label>
                        <AllCities>{ { className: "options", func: changeHandler, required: true } }</AllCities>
                    </div>
                    <div className="imputs">
                        <label htmlFor="type">Property Type</label>
                        <TypeSelect>{ { className: "options", func: changeHandler, required: false } }</TypeSelect>
                    </div>

                    <div className="imputs">
                        <label htmlFor="type">Bedroom</label>
                        <BedroomCount>{ { className: "options", func: changeHandler, required: false } }</BedroomCount>
                    </div>
                    <div className="typeContainer">

                        <div className="imputs" >
                            <label htmlFor="price">Min.Price</label>
                            { offer === "RENT" ? <RentingPrice>{ { id: "minPrice", className: "options", func: changeHandler, required: true } }</RentingPrice>
                                : <SellingPrice>{ { id: "minPrice", className: "options", func: changeHandler, required: true } }</SellingPrice> }
                        </div>
                        <div className="imputs" >
                            <label htmlFor="price">Max.Price</label>
                            { offer === "SELL" ? <RentingPrice>{ { id: "maxPrice", className: "options", func: changeHandler, required: true } }</RentingPrice>
                                : <SellingPrice>{ { id: "maxPrice", className: "options", func: changeHandler, required: true } }</SellingPrice>
                            }
                        </div>
                    </div>

                </main>
                <button>SEARCH</button>
            </div>
        </form>
    )
}
export default Search;