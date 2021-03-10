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

    },
    construction(props) {
        let {className,func} =props.children
        return (
            <select name="construction" id="construction" className={ className } required onChange={ func }>
                <option value="0">Select...</option>
                { SearchOpions('construction', 'New', null) }
                { SearchOpions('construction', 'Old', null) }
                { SearchOpions('construction', 'Brick', null) }
                { SearchOpions('construction', 'Panel', null) }
            </select>
        )

    },
    floor(props) {
        let {className,op,func} =props.children

        return (
            <select name="floor" id={ "floor" + op } className={ className } required onChange={ func }>
                <option value="0">Select...</option>
                { SearchOpions('floor', '1', null) }
                { SearchOpions('floor', '2', null) }
                { SearchOpions('floor', '3', null) }
                { SearchOpions('floor', '4', null) }
            </select>
        )
    },
    furniture(props) {
        let {className,func} =props.children

        return (
            <select name="furnished" id="furnished" className={ className } required onChange={ func }>
                <option value="0">Select...</option>
                { SearchOpions('furnished', 'Furnished', null) }
                { SearchOpions('furnished', 'Part-furnished', null) }
                { SearchOpions('furnished', 'Not furnished', null) }
            </select>
        )
    },
    heating(props) {
        let {className,func} =props.children

        return (
            <select name="heating" id="heating" className={ className } required onChange={ func }>
                <option value="0">Select...</option>
                { SearchOpions('heating', 'Gas', null) }
                { SearchOpions('heating', 'Electricity', null) }
                { SearchOpions('heating', 'Local', null) }
            </select>
        )
    },
}

export default optionFields;