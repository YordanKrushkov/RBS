import './index.scss'
import {useState} from 'react'
import { MdAddAPhoto } from "react-icons/md";
import {openImgInput,close,closeX} from '../../Utils/eventHandlers';
import {uploadImage} from '../../Utils/imgUploader'
import submitData from '../../Services/submitData'

const AddMoreImages = ({properties, setUpdate}) => {
    const [img,setIMG] = useState([])

    const submitHandler=(e)=>{

        submitData(img,properties._id,'/properties/update')
        .then(res=>{
            setIMG([]);
            setUpdate(true)
            closeX()
        })
        .catch(err=>console.log(err))        
        close('newImageWrapper');
    }
    
    return ( 
        <section id="newImageWrapper">
        <div>

            <ul id="newImageList">

            </ul>
        </div>
            <footer>

            <MdAddAPhoto id="addMoreImages" onClick={()=>openImgInput('addNewImage')} />
            <input  type="file" multiple id="addNewImage" onChange={(e)=>uploadImage(e,setIMG, 'newImageList')}/>
            </footer>
        {img.length!==0?<button id="submitMoreImages" onClick={submitHandler}>SUBMIT</button>:null} 
        </section>
     );
}
 
export default AddMoreImages;