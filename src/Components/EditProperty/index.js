import './index.scss';
import { useState, useEffect,useContext } from 'react';
import BedroomCount from '../../Components/FormElements/Properties/Bedrooms';
import BathroomCount from '../../Components/FormElements/Properties/Bathrooms';
import CheckboxContainer from '../../Components/FormElements/Checkbox';
import { updateProperty } from '../../Services/propertiesServices';
import { ActionContext } from '../../Context/actionContext';
import { IoIosBed } from "react-icons/io";
import { GiBathtub } from "react-icons/gi";

const EditProperty = ({ properties}) => {
    const initialState = properties.details
    const { bedrooms, bathroom, description } = properties
    const [arr, setArr] = useState([]);
    const [editedPropertie, setEdit] = useState({
        id: '',
        bedrooms: '',
        bathroom: '',
        details: [],
        description: '',
    })
    const { editProp,notify } = useContext(ActionContext);

    //Set INITIALSTATE
    useEffect(() => {
        setArr(initialState)
    }, [initialState]);

    //Set INITAL EDITED PROPERTIE
    useEffect(() => {
        setEdit({
            id: properties._id,
            bedrooms: bedrooms,
            bathroom: bathroom,
            description: description,
            details: arr
        })
    }, [ properties]);

    //UPDATE DETAILS
    useEffect(() => {
        setEdit({
            ...editedPropertie,
            details: arr
        })
    }, [ arr]);
   
    //UPDATE PROPERTY
    const onChangeHandler = (e) => {
        setEdit({
            ...editedPropertie,
            [e.target.id]: e.target.value,
        });
    }

    //SUBMIT
    const submitHandler = (e) => {
        e.preventDefault(e);

        setEdit({
            ...editedPropertie,
            details: arr,
        });
        updateProperty(editedPropertie)
            .then(() => {
                editProp(false)
                notify(true,"Updated successfully")
            })
            .catch((err) => notify(true,"Please, try again"));
    };

    return (
        <div id="editDetailsContainer">
            <form id='detailsField' onSubmit={ submitHandler }>
                <div id="detailsIconWrapper">
                    <div>
                        <IoIosBed className="iconsEdit" />
                        <BedroomCount>{ { className: "optionMenu", value: properties.bedrooms, func: onChangeHandler } }</BedroomCount>
                    </div>
                    <div>
                        <GiBathtub className="iconsEdit" />
                        <BathroomCount>{ { className: "optionMenu", value: properties.bathroom, func: onChangeHandler } }</BathroomCount>
                    </div>
                </div>
                <div className="infoBody">
                    <div>
                        <h2>Details</h2>
                    </div>
                    <CheckboxContainer className="editPropertyCheckbox" initialState={ initialState } setArr={ setArr } arr={ arr } />
                </div>
                <div id="detailDescription">
                    <h2>Description</h2>
                    <div>
                        <textarea name="description" id="description" cols="30" rows="10" defaultValue={ properties.description } onChange={ onChangeHandler } />
                    </div>
                </div>
                <button>SUMBIT</button>
            </form>

        </div>
    );
}

export default EditProperty;