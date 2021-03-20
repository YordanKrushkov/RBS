import './index.scss';
import {useState, useEffect} from 'react';
import { IoIosBed } from "react-icons/io";
import { GiBathtub } from "react-icons/gi";
import BedroomCount from '../../Components/FormElements/Properties/Bedrooms'
import BathroomCount from '../../Components/FormElements/Properties/Bathrooms'
import CheckboxContainer from '../../Components/FormElements/Checkbox'
import {close, detailHendler, open} from '../../Utils/eventHandlers'
import getCookie from '../../Services/cookies'
import UpdateProfile from '../../Services/updateProperty'
const EditProperty = ({properties}) => {
const initialState=properties.details
const {bedrooms,bathroom,description}=properties

const [edit,setEdit]=useState({
    id:'',
    bedrooms: '',
    bathroom: '',
    details: initialState,
    description: '',
})
useEffect(()=>{
setEdit({
    id:properties._id,
    bedrooms:bedrooms,
    bathroom:bathroom,
    description:description,
    details:initialState
})
},[properties])

    const onChangeHandler=(e)=>{
        setEdit({
            ...edit,
            [e.target.id]:e.target.value,
        })
    }

    const submitHandler=(e)=>{
        e.preventDefault(e);
    
        setEdit({
            ...edit,
            details: initialState,
        })
        UpdateProfile(edit)
        .then(()=> {close('editDetailsContainer');open('detailsContainer', 'block')} )
        .catch((err)=>console.log(err))
    }
    return ( 
        <div id="editDetailsContainer">
        <form id='detailsField' onSubmit={submitHandler}>
            <div id="detailsIconWrapper">
                <div>
                    <IoIosBed className="iconsEdit" />
                    {/* <span>{ properties.bedrooms }</span> */}
                    <BedroomCount>{ { className: "optionMenu",value:properties.bedrooms, func: onChangeHandler } }</BedroomCount>
                </div>
                <div>
                    <GiBathtub className="iconsEdit" />
                    <BathroomCount>{ { className: "optionMenu",value:properties.bathroom, func: onChangeHandler } }</BathroomCount>

                </div>

            </div>
            <div className="infoBody">
                <div>
                    <h2>Details</h2>
                </div>
                {/* <ul className="moreDetailsList">
                    { properties.details ? (properties.details.map(e => {
                        return <li key={ e }>{ e }</li>
                    })) : null }
                </ul> */}
                <CheckboxContainer className="editPropertyCheckbox" detailHendler={ detailHendler } initialState={ initialState }/>
            </div>
            <div id="detailDescription">
                <h2>Description</h2>
                <div>
                    <textarea name="description" id="description" cols="30" rows="10" defaultValue={properties.description} onChange={onChangeHandler}/>
                </div>
            </div>
            <button>SUMBIT</button>
        </form>

    </div>
     );
}
 
export default EditProperty;