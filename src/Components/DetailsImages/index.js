import { useContext,useEffect,useState } from 'react'
import { ActionContext } from '../../Context/actionContext';
import { Image, Transformation } from 'cloudinary-react';
import deleteImages from '../../Services/deleteImages';
import { AiOutlineCloseCircle } from "react-icons/ai";
import './index.scss';

const DetailImages = ({ images, id, changePicture, mine,setUpdate }) => {

    const { edit,deleteImages } = useContext(ActionContext)
    const DeleteImages = (e) => {
        deleteImages(true);
        // const confirm
        let src = e.currentTarget.previousSibling.src
        deleteImages(src, id)
            .then((res) => setUpdate(true))
            .catch(err => console.log(err));
    };
 
    return (
        <section className="detailImages">
            {images && images.map(x =>
                <div>
                    <Image publicId={ x } key={ x } cloudName="zltgrd" onClick={ changePicture }>
                        <Transformation width="150" height="150" />
                    </Image>
                    { mine && edit && <AiOutlineCloseCircle className="deleteImage" onClick={ DeleteImages } /> }
                </div>
            ) }
        </section>
    );
}

export default DetailImages;