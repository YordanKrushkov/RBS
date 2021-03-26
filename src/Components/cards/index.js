import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';
import { AuthContext } from '../../Context';
import { ActionContext } from '../../Context/actionContext';
import Loader from '../Loader';

import { likeProperty } from '../../Services/propertiesServices';
import charHandler from '../../Utils/charHandler';
import { IoIosBed } from "react-icons/io";
import { GiBathtub } from "react-icons/gi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import './index.scss';

const CardElement = ({ data, loading }) => {
    const [style, setStyle] = useState(true);
    const [lik, setLiked] = useState(false);
    const { userID } = useContext(AuthContext);
    const { like, dislike, liked } = useContext(ActionContext);
    const history = useHistory();
    let propertie = data;
    const id = propertie._id;
    let rent = propertie.sellOrRent === "RENT";
    useEffect(() => {
        if (propertie.ownerId && propertie.ownerId._id === userID || !userID) {
            setStyle(false)
        };
        if (propertie.ownerId && propertie.ownerId === userID) {
            setStyle(false)
        };
        if (liked && liked.includes(id)) {
            setLiked(true)
        };
        if (propertie.liked && propertie.liked.includes(userID)) {
            setLiked(true)
        };
    }, [lik, userID]);


    const { char, bath } = charHandler(propertie);
    const handleClick = (e) => {
        e.preventDefault();
        history.push(`/property/${id}`);
    };
    const likeHandler = (e) => {
        let key = '';

        if (lik) {
            key = "dislike";
            setLiked(false);
            dislike(id);
        }
        else {
            key = 'like';
            setLiked(true);
            like(id);
        }
        likeProperty(key, id);
    };

    return (
        <div className="parent">
            {loading && <Loader id="cardLoader" /> }
            <header>
                <div className="propImage">
                    { style ? !lik ? <FaRegHeart id="like" onClick={ likeHandler } />
                        : <FaHeart id="liked" onClick={ likeHandler } /> : null }
                    <Image publicId={ propertie.img } cloudName="zltgrd">
                        <Transformation width="150" height="150" />
                    </Image>
                </div>
                <div className="cardImgInfo">
                    <h2>{ `£ ${propertie.price} ${rent ? 'p.m' : ''}` }</h2>
                    <div className="iconWrapper">
                        <div><IoIosBed className="icon" /> { char } </div>
                        <div><GiBathtub className="icon" /> { bath } </div>
                    </div>
                    <h6>{ propertie.street }</h6>
                    <h6>{ propertie.city }</h6>
                </div>
            </header>
            <footer>
                <button onClick={ handleClick }>Details</button>
            </footer>
        </div>
    )
}
export default CardElement