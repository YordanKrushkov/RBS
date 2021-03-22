import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AllCities from '../../Components/FormElements/Cities';
import { openImgInput, switchMenu, detailHendler } from '../../Utils/eventHandlers';
import { uploadImage } from '../../Utils/imgUploader';
import submitData from '../../Services/submitData';
import {userVerify} from '../../Services/Users';
import {verifySubmit} from '../../Utils/verifyData'
import CheckboxContainer from '../../Components/FormElements/Checkbox';
import OptionsSection from '../../Components/FormElements/OptionsSection';
import './index.scss';

const SubmitForm = () => {
    const [arr, setArr] = useState([]);
    const [img, setIMG] = useState([]);
    const [offer, changeOffer] = useState('RENT');

    const [properties, getData] = useState({
        type: '',
        price: '',
        city: '',
        street: '',
        bedrooms: '',
        bathroom: '',
        sellOrRent: '',
        details: arr,
        description: '',
        ownerId: '',
    });
    const history = useHistory()
    useEffect(() => {
        userVerify()
        .then((res) => { !res.auth && history.push('/login') })
        .catch((err) => history.push('/login'))
    }, [])

    const onChangeHandler = (e) => {
        getData({
            ...properties,
            details: arr,
            sellOrRent: offer,
            [e.target.id]: e.target.value,
        });
    };
    useEffect(() => {
        getData({
            ...properties,
            sellOrRent: offer
        })
    }, [offer])
    const submitHandler = (e) => {
        e.preventDefault();
        verifySubmit(properties,img)
        getData({
            ...properties,
            sellOrRent: offer,
            details: arr,
        });
        submitData(img, properties, '/properties/create')
            .then((res) => {
                if(res){
                    history.push('/')
                }else if(res.error){
                  return
                }
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
                            <h2>City *</h2>
                            <AllCities>{ { className: "optionMenu", func: onChangeHandler } }</AllCities>
                        </div>
                        <div className="submitInputWrapper addressStreet">
                            <h2>Address *</h2>
                            <input type="text" id="street" onChange={ onChangeHandler } />
                        </div>
                    </section>
                    <OptionsSection onChangeHandler={onChangeHandler} />
                    <p>All fields marked with <b>*</b> are required and must be filled.</p>
                    <p id="wrongInput"></p>
                </main>
                <CheckboxContainer className="checkboxContainer" detailHendler={ detailHendler } arr={ arr } setArr={ setArr } />
                <section className="addImages">
                    <div>
                        <ul id="imgContainer">
                        </ul>
                    </div>
                    <section>
                        <span id="imageButton" onClick={ () => { openImgInput('fileImg') } }>{ img.length == 0 ? "Add Profile Picture *" : "Add More Images" }</span>
                        <input id="fileImg" type="file" multiple onChange={ (e) => { uploadImage(e, setIMG, 'imgContainer') } } />
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
