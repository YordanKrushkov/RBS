import { useState, useContext } from 'react';
import { ActionContext } from '../../Context/actionContext';
import Loader from '../Loader';
import submitData from '../../Services/submitData';
import { openImgInput } from '../../Utils/eventHandlers';
import { uploadImage } from '../../Utils/imgUploader';
import { MdAddAPhoto } from "react-icons/md";
import './index.scss';

const AddMoreImages = ({ properties }) => {
    const [img, setIMG] = useState([]);
    const [loading, setLoading] = useState(false);

    const { editProp, notify } = useContext(ActionContext);
    const submitHandler = (e) => {
        setLoading(true)

        submitData(img, properties._id, '/properties/update')
            .then(res => {
                editProp(false)
                notify(true, 'Submitted successfully');
                setLoading(false)
            })
            .catch(err => {
                notify(true, 'Please, try again!');
                setLoading(false);
            });
    };

    return (
        <section id="newImageWrapper">
            <div>
                { loading && <Loader id="imgLoading" /> }
                <ul id="newImageList">
                </ul>
            </div>
            <footer>
                <MdAddAPhoto id="addMoreImages" onClick={ () => openImgInput('addNewImage') } />
                <input type="file" multiple id="addNewImage" onChange={ (e) => uploadImage(e, setIMG, 'newImageList') } />
            </footer>
            {img.length !== 0 ? <button id="submitMoreImages" onClick={ submitHandler }>SUBMIT</button> : null }
        </section>
    );
};

export default AddMoreImages;