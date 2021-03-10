import React from 'react';
import './index.scss'

const SortInput = (f) => {


    return (
    <select name="sortBy" id="sortBy" className="sortSelector" onChange={ f }>
     <option className="neButton" id="sortBy" value="newest" > Newest</option>
    <option className="neButton" id="sortBy" value='lowerPrice' >Price: Low-High</option>
     <option className="neButton" id="sortBy" value='higherPrice' >Price: High-Low</option>
    </select>
    )
}

export default SortInput