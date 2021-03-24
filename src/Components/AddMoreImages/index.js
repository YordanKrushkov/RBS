import './index.scss'
import { useState,useContext } from 'react'
import { MdAddAPhoto } from "react-icons/md";
import { openImgInput } from '../../Utils/eventHandlers';
import { uploadImage } from '../../Utils/imgUploader'
import submitData from '../../Services/submitData'
import { ActionContext } from '../../Context/actionContext';
const AddMoreImages = ({ properties}) => {
    const [img, setIMG] = useState([])
    const {editProp} =useContext(ActionContext)
    const submitHandler = (e) => {

        submitData(img, properties._id, '/properties/update')
            .then(res => {
                editProp(false)
            })
            .catch(err => console.log(err));
    }

    return (
        <section id="newImageWrapper">
            <div>
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
}

export default AddMoreImages;