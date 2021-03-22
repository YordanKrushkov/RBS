import './index.scss'
import TypeSelect from '../FormElements/Properties/Type'
import BedroomCount from '../FormElements/Properties/Bedrooms'
import RentingPrice from '../FormElements/Price/RentingPrice'
import SellingPrice from '../FormElements/Price/SellingPrice'
import AllCities from '../FormElements/Cities'
const Filter = (props) => {
    const { ChangeHandler, offer } = props.children

    return (
        <div id='filterBar' className="filterBar" >
            <span className="filterSpan" id="filterText">Filter:</span>
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
                <label htmlFor="price" className="filterSpan">Min.Price:</label>
                { offer === "RENT" ? <RentingPrice>{ { id: "minPrice", className: "searchInput", func: ChangeHandler, required: true } }</RentingPrice>
                    : <SellingPrice>{ { id: "minPrice", className: "searchInput", func: ChangeHandler, required: true } }</SellingPrice> }
            </div>
            <div className="filterButton" >
                <label htmlFor="price" className="filterSpan">Max.Price:</label>
                { offer === "RENT" ? <RentingPrice>{ { id: "maxPrice", className: "searchInput", func: ChangeHandler, required: true } }</RentingPrice>
                    : <SellingPrice>{ { id: "maxPrice", className: "searchInput", func: ChangeHandler, required: true } }</SellingPrice>
                }
            </div>
            <div className="filterButton">
                <label className="filterSpan">Sort by:</label>
                <select name="sortBy" id="sortBy" className="searchInput" onChange={ ChangeHandler }>
                    <option id="sortBy" value="newest" > Newest</option>
                    <option id="sortBy" value='lowerPrice' >Price: Low-High</option>
                    <option id="sortBy" value='higherPrice' >Price: High-Low</option>
                </select>
            </div>
        </div>
    )
}

export default Filter