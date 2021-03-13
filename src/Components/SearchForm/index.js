import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './index.scss'
import AllCities from '../searchInputs/cities'
import Price from '../searchInputs/price'
import input from '../searchInputs/type'
import {switchMenu} from '../../Utils/eventHandlers'

const Search = () => {
    const [offer, changeOffer] = useState(true);
    const [search, changeSearch] = useState({ sellOrRent: 'RENT' })
    const history = useHistory()
    const {TypeSelect, BedroomCount}=input;
    const changeHandler = (e) => {
        changeSearch({
            ...search,
            [e.target.id]: e.target.value
        })
    }

    const searchIt = (e) => {
        e.preventDefault()
        history.push({
            pathname: '/properties',
            search: `?sellOrRent=${search.sellOrRent}&city=${search.city}&type=${search.type}&bedrooms=${search.bedrooms}&minPrice=${search.minPrice}&maxPrice=${search.maxPrice}`,
            state: search
        })

    }
    return (
        <form action="">
            <div className="formWrapper">
                <header>
                    <ul>
                        <li onClick={(e)=>{switchMenu(e,changeOffer)}} value='RENT' style={{borderTopLeftRadius:10}}  className="new" >RENT</li>
                        <li onClick={(e)=>{switchMenu(e,changeOffer)}}  value='SELL' style={{borderTopRightRadius:10}}>SALE</li>
                    </ul>
                </header>
                <main className="searchFormBody">
                    <h4>Search for Property </h4>
                    <div className="imputs" >
                        <label htmlFor="city">City</label>
                        <AllCities>{{className:"options", func:changeHandler, required:true}}</AllCities>
                    </div>
                   <div className="imputs" >
                        <label htmlFor="price">Min.Price</label>
                       {offer==="RENT" ? <Price.RentingPrice>{{id:"minPrice",className:"options", func:changeHandler, required:true}}</Price.RentingPrice>
                       : <Price.SellingPrice>{{id:"minPrice",className:"options", func:changeHandler, required:true}}</Price.SellingPrice>}
                        </div>
                   <div className="imputs" >
                        <label htmlFor="price">Max.Price</label>
                        {offer==="SELL" ? <Price.RentingPrice>{{id:"maxPrice",className:"options", func:changeHandler, required:true}}</Price.RentingPrice>
                        :<Price.SellingPrice>{{id:"maxPrice",className:"options", func:changeHandler, required:true}}</Price.SellingPrice> 
                        }
                        </div>
                    <div className="typeContainer">
                        <div className="type">
                            <label htmlFor="type">Property Type</label>
                            <TypeSelect>{{className:"typeflat", func:changeHandler, required:false}}</TypeSelect>
                        </div>

                        <div className="type">
                            <label htmlFor="type">Bedroom</label>
                            <BedroomCount>{{className:"typeflat", func:changeHandler, required:false}}</BedroomCount>
                        </div>
                    </div>
                </main>
                <button>SEARCH</button>
            </div>
        </form>
    )
}
export default Search;