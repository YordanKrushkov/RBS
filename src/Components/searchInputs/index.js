import React from 'react';
import './index.scss'

const SearchOpions = (id,text) => {


    return <option className="inputsEL" id={id} value={text}  required>{text}  </option>

}

export default SearchOpions