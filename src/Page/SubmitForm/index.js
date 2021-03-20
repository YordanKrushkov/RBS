import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './index.scss'
import AllCities from '../../Components/FormElements/Cities'
import { openImgInput, switchMenu, detailHendler } from '../../Utils/eventHandlers'
import { setimage, uploadImage } from '../../Utils/imgUploader';
import TypeSelect from '../../Components/FormElements/Properties/Type';
import BedroomCount from '../../Components/FormElements/Properties/Bedrooms'
import BathroomCount from '../../Components/FormElements/Properties/Bathrooms'
import userVerify from '../../Services//userVerify'
import CheckboxContainer from '../../Components/FormElements/Checkbox'

const SubmitForm = () => {
    const initialState = [];
    const [img, setIMG] = useState([]);
    const [properties, getData] = useState({
        type: '',
        price: '',
        city: '',
        street: '',
        bedrooms: '',
        bathroom: '',
        sellOrRent: '',
        details: initialState,
        description: '',
        floorplan: '',
        ownerId: '',
    });
    const [offer, changeOffer] = useState('RENT');
    const history = useHistory()

    useEffect(() => {
        userVerify().then((res) => { !res.auth && history.push('/login') })
            .catch((err) => history.push('/login'))
    }, [])

    const onChangeHandler = (e) => {
        getData({
            ...properties,
            sellOrRent: offer,
            details: [(details) => [...details, ...initialState]],
            [e.target.id]: e.target.value,
        });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        getData({
            ...properties,
            details: (details => [...details, ...initialState]),
        });
        setimage(img, properties, '/api/upload')
            .then((res) => {
                history.push('/')
            })
            .catch(err => console.error(err))
    };
    return (
        <div id="submitPropertie">
            <header>
                <ul >
                    <li onClick={ (e) => { switchMenu(e, changeOffer) } } value='RENT' style={ { borderTopLeftRadius: 10 } } className="new">RENT</li>
                    <li onClick={ (e) => { switchMenu(e, changeOffer) } } value='SALE' style={ { borderTopRightRadius: 10 } } className="">SALE</li>
                </ul>
            </header>
            <h1>{ offer } your property</h1>
            <form onSubmit={ submitHandler }>
                <main>
                    <section>
                        <div className="submitInputWrapper">
                            <h2>City</h2>
                            <AllCities>{ { className: "optionMenu", func: onChangeHandler } }</AllCities>
                        </div>
                        <div className="submitInputWrapper addressStreet">
                            <h2>Address</h2>
                            <input type="text" id="street" onChange={ onChangeHandler } />
                        </div>
                    </section>
                    <section>
                        <div className="submitInputWrapper secondRow">
                            <h2>Property Type</h2>
                            <TypeSelect>{ { className: "optionMenu", func: onChangeHandler } }</TypeSelect>
                        </div>
                        <div className="submitInputWrapper secondRow">
                            <h2>Bedrooms</h2>
                            <BedroomCount>{ { className: "optionMenu", func: onChangeHandler } }</BedroomCount>
                        </div>
                        <div className="submitInputWrapper secondRow">
                            <h2>Bathrooms</h2>
                            <BathroomCount>{ { className: "optionMenu", func: onChangeHandler } }</BathroomCount>
                        </div>
                        <div className="submitInputWrapper secondRow">
                            <h2>Price</h2>
                            <input className="optionMenu" type="text" id="price" onChange={ onChangeHandler } />
                        </div>
                    </section>
                </main>
                <CheckboxContainer detailHendler={ detailHendler } initialState={ initialState } />
                <section className="addImages">
                    <div>
                        <ul id="imgContainer">

                        </ul>
                    </div>
                    <section>
                        <span onClick={ () => { openImgInput('fileImg') } }>{ img.length == 0 ? "Add Profile Picture" : "Add More Images" }</span>
                        <input id="fileImg" type="file" multiple onChange={ (e) => { uploadImage(e, setIMG) } } />
                    </section>

                </section>
                <section className="formDescription">
                    <h2>Description</h2>
                    <textarea name="description" id="description" onChange={ onChangeHandler } />
                </section>
                <button id="submit" type="submit">SUMBIT</button>
            </form>
        </div>
    )
}

export default SubmitForm;
