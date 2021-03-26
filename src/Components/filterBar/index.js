import AllCities from '../FormElements/Cities';
import TypeSelect from '../FormElements/Properties/Type';
import BedroomCount from '../FormElements/Properties/Bedrooms';
import RentingPrice from '../FormElements/Price/RentingPrice';
import SellingPrice from '../FormElements/Price/SellingPrice';
import './index.scss';

const Filter = ({ ChangeHandler, offer }) => {

    return (
        <div id='filterBar' className="filterBar" >
            <span className="filterSpan" id="filterText">Filter:</span>
            <div className="filterButton">
                <label htmlFor="city" className="filterSpan">City: </label>
                <AllCities>{ { className: "searchInput", func: ChangeHandler } }</AllCities>
            </div>
            <div className="filterButton">
                <label htmlFor="type" className="filterSpan">Type:</label>
                <TypeSelect>{ { className: "searchInput", func: ChangeHandler } }</TypeSelect>
            </div>
            <div className="filterButton">
                <label htmlFor="bedrooms" className="filterSpan">Bedrooms:</label>
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
                    <option id="sortBy" name="sortBy" value="newest" > Newest</option>
                    <option id="sortBy" name="sortBy" value='lowerPrice' >Price: Low-High</option>
                    <option id="sortBy" name="sortBy" value='higherPrice' >Price: High-Low</option>
                </select>
            </div>
        </div>
    )
}

export default Filter