import {Image,Transformation} from 'cloudinary-react'
import './index.scss'
import { AiOutlineCloseCircle } from "react-icons/ai";
import deleteImages from '../../Services/deleteImages'
const DetailImages = ({images,id,changePicture,setUpdate,mine}) => {

const DeleteImages =(e)=>{
    let src=e.currentTarget.previousSibling.src
    deleteImages(src,id)
    .then((res)=>setUpdate(true))
    .catch(err=>console.log(err))
    setUpdate(false)
}

    return ( 
    <section className="detailImages">
        {images && images.map(x=>
        <div>
            <Image publicId={x} key={x} cloudName="zltgrd" onClick={changePicture}>
            <Transformation width="150" height="150"/>
            </Image>
            {mine&&<AiOutlineCloseCircle className="deleteImage" onClick={DeleteImages}/>}
        </div>
         )}
    </section>
         );
}
 
export default DetailImages;