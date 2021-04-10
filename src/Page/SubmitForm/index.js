import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ActionContext } from '../../Context/actionContext';
import Loader from '../../Components/Loader';
import AllCities from '../../Components/FormElements/Cities';
import CheckboxContainer from '../../Components/FormElements/Checkbox';
import OptionsSection from '../../Components/FormElements/OptionsSection';
import { uploadImage } from '../../Utils/imgUploader';
import { verifySubmit, hideError } from '../../Utils/formsValidator';
import { openImgInput, switchMenu, detailHendler } from '../../Utils/eventHandlers';
import submitData from '../../Services/submitData';
import { userVerify } from '../../Services/Users';
import './index.scss';

const SubmitForm = () => {
    const [arr, setArr] = useState([]);
    const [img, setIMG] = useState([]);
    const [offer, changeOffer] = useState('RENT');
    const [error, setErr] = useState({
        err: '',
        input: ''
    });
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
    const [loading, setLoading] = useState(false);

    const history = useHistory();
    const { notify } = useContext(ActionContext);
    useEffect(() => {
        userVerify()
            .then((res) => { !res.auth && history.push('/login') })
            .catch((err) => history.push('/login'))
    }, []);

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
        });
        console.log(offer);
    }, [offer]);
    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        verifySubmit(properties, img, setErr);
        getData({
            ...properties,
            sellOrRent: offer,
            details: arr,
        });
        if (!error.err) {
            submitData(img, properties, '/properties/create')
                .then((res) => {
                    if (res) {
                        notify(true, 'Submitted successfully');
                        setLoading(false);
                        history.push('/');
                    } else if (res.error) {
                        setLoading(false);
                        return
                    };
                })
                .catch(err => {
                    setLoading(false);
                    console.error(err);
                })
        };

    };
    hideError(error.err, setErr);

    return (
        <div id="submitPropertie">
            {loading && <Loader id="postLoader" /> }
            <header>
                <ul >
                    <li onClick={ (e) => { switchMenu(e, changeOffer) } } value='RENT' className={ offer === "RENT" ? 'clicked' : '' } >RENT</li>
                    <li onClick={ (e) => { switchMenu(e, changeOffer) } } value='SALE' className={ offer === "SALE" ? 'clicked' : '' }>SALE</li>
                </ul>
            </header>
            <h1>{ offer } your property</h1>
            <form onSubmit={ submitHandler }>
                <main>
                    <section>
                        <div className="submitInputWrapper">
                            <h2>City *</h2>
                            <AllCities>{ { className: error.input !== 'city' ? "optionMenu" : "optionMenu errors", func: onChangeHandler } }</AllCities>
                        </div>
                        <div className="submitInputWrapper addressStreet">
                            <h2>Address *</h2>
                            <input type="text" className={ error.input === "street" ? "errors" : '' } id="street" onChange={ onChangeHandler } />
                        </div>
                    </section>
                    <OptionsSection error={ error } onChangeHandler={ onChangeHandler } />
                    { error.err
                        ? <p id="wrongInput">{ error.err }</p>
                        : <p>All fields marked with <b>*</b> are required and must be filled.</p>
                    }
                </main>
                <CheckboxContainer className="checkboxContainer" detailHendler={ detailHendler } arr={ arr } setArr={ setArr } />
                <section className="addImages">
                    <div>
                        <ul id="imgContainer">
                            { img.length !== 0 && img.map(x =>
                                <li key={ x }>
                                    <img src={ x } alt="upload more" />
                                </li>) }
                        </ul>
                    </div>
                    <section>
                        <span id="imageButton" className={ error.input === "imageButton" ? "errors" : '' } onClick={ () => { openImgInput('fileImg') } }>{ img.length === 0 ? "Add Profile Picture *" : "Add More Images" }</span>
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
