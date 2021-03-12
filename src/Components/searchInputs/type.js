import React from 'react'
import SearchOpions from './index'

const optionFields= {

    TypeSelect(props) {
        let {className,func} =props.children

        return (
            <select name="type" id="type" defaultValue="0" className={className} onChange={func} required>
                <option value="0">Select...</option>
                { SearchOpions('type', 'Flat', null) }
                { SearchOpions('type', 'House', null) }
                { SearchOpions('type', 'Cottage', null) }
                { SearchOpions('type', 'Land', null) }
            </select>
        )
    },

    bedroomCount(props) {
        let {className,func} =props.children
        return (
            <select name="type" id="bedrooms" className={className} defaultValue="0" onChange={func} required>
                <option value="0">Select...</option>
                { SearchOpions('bedrooms', 'Studio', 'Studio', null) }
                { SearchOpions('bedrooms', '1 bedroom', null) }
                { SearchOpions('bedrooms', '2 bedroom', null) }
                { SearchOpions('bedrooms', '3 bedroom', null) }
                { SearchOpions('bedrooms', '4 bedroom', null) }
            </select>
        )

    },
    bathroomCount(props) {
        let {className,func} =props.children
        return (
            <select name="type" id="bathroom" className={ className } onChange={ func } required>
                <option value="0">Select...</option>
                { SearchOpions('bathroom', '1 bathroom', null) }
                { SearchOpions('bathroom', '2 bathroom', null) }
                { SearchOpions('bathroom', '3 bathroom', null) }
                { SearchOpions('bathroom', '4 bathroom', null) }
            </select>
        )

    }
}

export default optionFields;