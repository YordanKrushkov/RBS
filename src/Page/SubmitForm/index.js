import { useState, useEffect,useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AllCities from '../../Components/FormElements/Cities';
import { openImgInput, switchMenu, detailHendler } from '../../Utils/eventHandlers';
import { uploadImage } from '../../Utils/imgUploader';
import submitData from '../../Services/submitData';
import {userVerify} from '../../Services/Users';
import {verifySubmit,hideError} from '../../Utils/formsValidator'
import CheckboxContainer from '../../Components/FormElements/Checkbox';
import OptionsSection from '../../Components/FormElements/OptionsSection';
import { ActionContext } from '../../Context/actionContext'
import './index.scss';

const SubmitForm = () => {
    const [arr, setArr] = useState([]);
    const [img, setIMG] = useState([]);
    const [offer, changeOffer] = useState('RENT');
    const [error, setErr]=useState({
        err:'',
        input:''
    })
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
    const history = useHistory();
    const { notify } = useContext(ActionContext)
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
        verifySubmit(properties,img, setErr)
        getData({
            ...properties,
            sellOrRent: offer,
            details: arr,
        });
       if(!error.err){
     submitData(img, properties, '/properties/create')
            .then((res) => {
                if(res){
                    notify(true,'Submitted successfully')
                    history.push('/');
                }else if(res.error){
                  return
                }
            })
            .catch(err => console.error(err))
       }
   
    };
    hideError(error.err,setErr)

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
                            <AllCities>{ { className: error.input!=='city'?"optionMenu":"optionMenu errors", func: onChangeHandler } }</AllCities>
                        </div>
                        <div className="submitInputWrapper addressStreet">
                            <h2>Address *</h2>
                            <input type="text" className={error.input==="street"? "errors":''} id="street" onChange={ onChangeHandler } />
                        </div>
                    </section>
                    <OptionsSection error={error} onChangeHandler={onChangeHandler} />
                    {error.err
                    ? <p id="wrongInput">{error.err}</p>
                    :<p>All fields marked with <b>*</b> are required and must be filled.</p>
                    }
                </main>
                <CheckboxContainer className="checkboxContainer" detailHendler={ detailHendler } arr={ arr } setArr={ setArr } />
                <section className="addImages">
                    <div>
                        <ul id="imgContainer">
                        </ul>
                    </div>
                    <section>
                        <span id="imageButton" className={error.input==="imageButton"? "errors":''} onClick={ () => { openImgInput('fileImg') } }>{ img.length == 0 ? "Add Profile Picture *" : "Add More Images" }</span>
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
