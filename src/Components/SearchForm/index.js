import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './index.scss'
import AllCities from '../searchInputs/cities'
import Price from '../searchInputs/price'
import inputs from '../searchInputs/type'

const Search = () => {
    const [style, changeStyle] = useState(true);
    const [search, changeSearch] = useState({ sellOrRent: 'RENT' })
    const history = useHistory()

    const clickHendler = (e) => {

        changeSearch({
            ...search,
            sellOrRent: e.target.textContent
        })
        if (e.target.textContent === 'SALE') {
            changeStyle(false)
        } else {
            changeStyle(true)
        }
        console.log(search);
    };

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
                        <li onClick={clickHendler} value='RENT'  className={ style ?"new" :"" } >RENT</li>
                        <li onClick={clickHendler}  value='SELL' className={ style ?"" :"new" }>SALE</li>
                    </ul>
                </header>
                <main className="searchFormBody">
                    <h4> Search for Property </h4>
                    <div className="imputs" >
                        <label htmlFor="city">City</label>
                        <AllCities>{{className:"options", func:changeHandler, required:true}}</AllCities>
                    </div>
                   <div className="imputs" >
                        <label htmlFor="price">Min.Price</label>
                       {style ? <Price.RentingPrice>{{id:"minPrice",className:"options", func:changeHandler, required:true}}</Price.RentingPrice>
                       : <Price.SellingPrice>{{id:"minPrice",className:"options", func:changeHandler, required:true}}</Price.SellingPrice>}
                        </div>
                   <div className="imputs" >
                        <label htmlFor="price">Max.Price</label>
                        {style ? <Price.RentingPrice>{{id:"maxPrice",className:"options", func:changeHandler, required:true}}</Price.RentingPrice>
                        :<Price.SellingPrice>{{id:"maxPrice",className:"options", func:changeHandler, required:true}}</Price.SellingPrice> 
                        }
                        </div>
                    <div className="typeContainer">
                        <div className="type">
                            <label htmlFor="type">Property Type</label>
                            <inputs.TypeSelect>{{className:"typeflat", func:changeHandler, required:false}}</inputs.TypeSelect>
                        </div>

                        <div className="type">
                            <label htmlFor="type">Bedroom</label>
                            <inputs.bedroomCount>{{className:"typeflat", func:changeHandler, required:false}}</inputs.bedroomCount>
                        </div>
                    </div>
                </main>
                <button>SEARCH</button>
            </div>
        </form>
    )
}
export default Search;