import React from 'react'
import './index.scss'
import optionFields from '../searchInputs/type'
import Price from '../searchInputs/price'
import AllCities from '../searchInputs/cities'
const Filter = (props) => {
    const {ChangeHandler, offer}=props.children
    const { TypeSelect, BedroomCount } = optionFields
    return (
        <div id='filterBar' className="filterBar" >
            <span className="filterSpan">Filter:</span>
            <div className="filterButton">
                <label htmlFor="city" ><span className="filterSpan">City: </span> </label>
                <AllCities>{ { className: "searchInput", func: ChangeHandler } }</AllCities>
            </div>
            <div className="filterButton">
                <label htmlFor="type" ><span className="filterSpan">Type: </span></label>
                <TypeSelect>{ { className: "searchInput", func: ChangeHandler } }</TypeSelect>
            </div>
            <div className="filterButton">
                <label htmlFor="bedrooms"><span className="filterSpan">Bedrooms: </span> </label>
                <BedroomCount>{ { className: "searchInput", func: ChangeHandler } }</BedroomCount>
            </div>
            <div className="filterButton" >
                <label htmlFor="price" className="filterSpan">Min.Price</label>
                { offer === "RENT" ? <Price.RentingPrice>{ { id: "minPrice", className: "searchInput", func: ChangeHandler, required: true } }</Price.RentingPrice>
                    : <Price.SellingPrice>{ { id: "minPrice", className: "searchInput", func: ChangeHandler, required: true } }</Price.SellingPrice> }
            </div>
            <div className="filterButton" >
                <label htmlFor="price" className="filterSpan">Max.Price</label>
                { offer === "RENT" ? <Price.RentingPrice>{ { id: "maxPrice", className: "searchInput", func: ChangeHandler, required: true } }</Price.RentingPrice>
                    : <Price.SellingPrice>{ { id: "maxPrice", className: "searchInput", func: ChangeHandler, required: true } }</Price.SellingPrice>
                }
            </div>
            <div className="filterButton">
                <label className="filterSpan">Sort by:</label>
                <select name="sortBy" id="sortBy" className="searchInput" onChange={ ChangeHandler }>
                <option  id="sortBy" value="newest" > Newest</option>
                <option  id="sortBy" value='lowerPrice' >Price: Low-High</option>
                <option  id="sortBy" value='higherPrice' >Price: High-Low</option>
                </select>
            </div>
        </div>
    )
}

export default Filter