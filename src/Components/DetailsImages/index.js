import { useContext } from 'react';
import { ActionContext } from '../../Context/actionContext';
import Loader from '../Loader';
import deleteImages from '../../Services/deleteImages';
import { Image, Transformation } from 'cloudinary-react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import './index.scss';

const DetailImages = ({ images, id, changePicture, mine, setUpdate, loading, setLoading }) => {

    const { edit, notify } = useContext(ActionContext);
    const DeleteImages = (e) => {
        setLoading(true);
        let src = e.currentTarget.previousSibling.src;

        deleteImages(src, id)
            .then((res) => {
                setUpdate(true);
                notify(true, 'Deleted');
                setLoading(false);
            })
            .catch(err => {
                notify(true, 'Please, try again!');
                setLoading(false);
            });
        setUpdate(false);
    };

    return (
        <section className="detailImages">
            {loading && <Loader id="imgDetailLoading" /> }
            {images && images.map(x =>
                <div key={ x }>
                    <Image publicId={ x } cloudName="zltgrd" onClick={ changePicture }>
                        <Transformation width="150" height="150" />
                    </Image>
                    { mine && edit && <AiOutlineCloseCircle className="deleteImage" onClick={ DeleteImages } /> }
                </div>
            ) }
        </section>
    );
}

export default DetailImages;