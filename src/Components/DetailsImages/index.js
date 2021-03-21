import {Image,Transformation} from 'cloudinary-react'
import './index.scss'
const DetailImages = ({images,changePicture}) => {
    return ( 
    <section className="detailImages">
        {images && images.map(x=>
            <Image publicId={x} key={x} cloudName="zltgrd" onClick={changePicture}>
            <Transformation width="150" height="150"/>
            </Image>
         )}
    </section>
         );
}
 
export default DetailImages;